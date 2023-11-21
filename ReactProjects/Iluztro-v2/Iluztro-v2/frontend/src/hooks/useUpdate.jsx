import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useJobContext } from "./useJobContext";

export const useUpdate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();
  const { dispatch } = useJobContext();

  const update = async (job_Id, update_status, update_URL) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3000/jobs/" + job_Id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ job_Id, update_status, update_URL }),
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // update the autho context
      dispatch({ type: "UPDATE_JOB", payload: json });

      setIsLoading(false);
    }
  };

  return { update, isLoading, error };
};
