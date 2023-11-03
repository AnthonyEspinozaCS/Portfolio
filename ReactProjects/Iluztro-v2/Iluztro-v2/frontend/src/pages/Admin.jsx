import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useJobContext } from "../hooks/useJobContext";

import { Job } from "../components/Job";
import { CreateJob } from "../components/CreateJob";

const Admin = () => {
  const [allUsers, setUsers] = useState([]);
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

    const getAllUsers = async () => {
      const response = await fetch("http://localhost:3000/users/all", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        setUsers([...json["users"]]);
      }

      return allUsers;
    };

    getAllJobs();
    getAllUsers();
  }, []);

  return (
    <>
      <section className="dashboard--admin container">
        <div className="admin--menubar">
          <h1>Admin Dashboard</h1>
          <CreateJob users={allUsers} />
        </div>
        <div className="overflow-wrapper">
          <div className="dashboard--admin__list">
            <table className="admin--table">
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
                {jobs &&
                  jobs.map((job) => (
                    <Job
                      key={job.job_id}
                      job={job}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
