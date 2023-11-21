import { useEffect, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
import { useJobContext } from "../hooks/useJobContext.jsx";
import { Event } from "../components/Event.jsx";
import { getTimeSinceCreated } from "../utils/utils.jsx";

import logoIcon from "../assets/images/logos.svg";
import sumIcon from "../assets/images/report.svg";
import webIcon from "../assets/images/website.svg";

const Dashboard = () => {
  const [event, setEvent] = useState(null);
  const { jobs, dispatch } = useJobContext();
  const { user } = useAuthContext();

  const jobIcons = {
    Logo: logoIcon,
    "Exec Summary": sumIcon,
    Website: webIcon,
  };

  useCalendlyEventListener({ onEventScheduled: (e) => getMeetingDetails(e.data.payload.event.uri.substring(e.data.payload.event.uri.lastIndexOf("/") + 1)) });

  const getMeetingDetails = async (uuid) => {
    const url = `http://localhost:3000/calendly/` + uuid;

    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("event", JSON.stringify(data.result));
        setEvent(data.result);
      } catch (error) {
        console.error(error);
      }
    }, 0);
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

    const checkForEvent = () => {
      const temp = JSON.parse(localStorage.getItem("event"));

      if (temp) setEvent(temp);
    };

    checkForEvent();
    getJobs();
  }, []);

  return (
    <>
      <section className="dashboard-back">
        <div className="dashboard container">
          <h1>Welcome Back, {user.first_name}</h1>
          {event && (!jobs || !jobs.length) && (
            <div className="event__container">
              <h2>Thank you for scheduling a consultation! The meeting details are below, as well as in your email.</h2>
              <Event data={event} />
            </div>
          )}
          {!event && (!jobs || !jobs.length) && (
            <div className="dashboard__empty">
              <h2>
                We're not working on anything for you at the <span className="text-accent">moment!</span>{" "}
              </h2>
              <h2>
                Let's discuss your <span className="text-accent">vision!</span>
              </h2>
              <InlineWidget
                url="https://calendly.com/patriciararagon/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                styles={{ height: "800px" }}
              />
            </div>
          )}
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
