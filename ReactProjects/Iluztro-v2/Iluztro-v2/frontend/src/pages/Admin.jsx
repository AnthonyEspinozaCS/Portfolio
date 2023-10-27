import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useJobContext } from "../hooks/useJobContext";
import { getTimeSinceCreated } from "../../utils/utils.jsx";

const Admin = () => {
  const { jobs, dispatch } = useJobContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getAllJobs = async () => {
      const response = await fetch("http://localhost:3000/jobs/admin", {
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

    getAllJobs();
  }, []);

  return (
    <>
      <section className="dashboard--admin container">
        <h1>Admin Dashboard</h1>
        <div className="dashboard--admin__list">
          {jobs && (
            <>
              <table className="">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Client Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Job ID</th>
                    <th>Type of Job</th>
                    <th>Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.job_id}>
                      <td>{job.user_id}</td>
                      <td>{job.first_name + job.last_name}</td>
                      <td>{job.company}</td>
                      <td>{job.email}</td>
                      <td>{job.job_id}</td>
                      <td>{job.type_job}</td>
                      <td>{job.status}</td>
                      <td>{getTimeSinceCreated(job.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Admin;
