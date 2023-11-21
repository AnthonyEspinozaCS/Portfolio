import React, { useEffect } from "react";
import { useState } from "react";
import UpdateJob from "./updateJob.jsx";
import { getTimeSinceCreated } from "../utils/utils.jsx";
import { JobSelect } from "./JobSelect.jsx";

export const Job = ({ job }) => {
  const [selectedOption, setSelectedOption] = useState(job.status);
  const [url, setURL] = useState(job.url);

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <tr>
        <td>{job.user_id}</td>
        <td>{job.first_name + " " + job.last_name}</td>
        <td>{job.company}</td>
        <td>{job.email}</td>
        <td>{job.job_id}</td>
        <td>{job.type_job}</td>
        <td>
          <div className="select-wrapper">
            <JobSelect
              job={job}
              onChange={handleSelect}
            />
          </div>
        </td>
        <td>
          <input
            type="text"
            onChange={handleURL}
            value={url}
          />
        </td>
        <td>{getTimeSinceCreated(job.created_at)}</td>
        <td>
          <UpdateJob
            jobId={job.job_id}
            updateStatus={selectedOption}
            updateURL={url}
          />
        </td>
      </tr>
    </>
  );
};
