import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
import { useJobContext } from "../hooks/useJobContext.jsx";
import { getTimeSinceCreated } from "../utils/utils.jsx";
import logoIcon from "../assets/images/logos.svg";
import sumIcon from "../assets/images/report.svg";
import webIcon from "../assets/images/website.svg";

const Dashboard = () => {
  const { jobs, dispatch } = useJobContext();
  const { user } = useAuthContext();

  const jobIcons = {
    Logo: logoIcon,
    "Exec Summary": sumIcon,
    Website: webIcon,
  };

  useEffect(() => {
    const getJobs = async () => {
      const response = await fetch("http://localhost:3000/jobs", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_JOBS", payload: json });
      }

      return jobs;
    };

    getJobs();
  }, []);

  return (
    <>
      <section className="dashboard-back">
        <div className="dashboard container">
          <h1>Welcome Back, {user.first_name}</h1>
          {jobs &&
            jobs.map((job) => (
              <div
                key={job.job_id}
                className="dashboard__card">
                <div className="card__text">
                  <h2 className="text-accent-g">{job.type_job}</h2>
                  <h3>Status: {job.status}</h3>
                  <p>{getTimeSinceCreated(job.created_at)}</p>
                  <p>Order #: {job.job_id}</p>
                </div>
                <div className="card__icon">
                  <img
                    src={jobIcons[job.type_job]}
                    alt="Icon for each service."
                  />
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
