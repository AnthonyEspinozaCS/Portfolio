import { useState } from "react";
import refresh from "../assets/images/update.svg";
import { useUpdate } from "../hooks/useUpdate";

const UpdateJob = ({ jobId, updateStatus, updateURL }) => {
  const { update, isLoading, error } = useUpdate();

  function handleClick() {
    update(jobId, updateStatus, updateURL);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={isLoading ? "update-button swirl" : "update-button"}>
        <img
          src={refresh}
          alt="Two arrows in a circle looping around."
        />
      </button>
      {error && <p>{error}</p>}
    </>
  );
};

export default UpdateJob;
