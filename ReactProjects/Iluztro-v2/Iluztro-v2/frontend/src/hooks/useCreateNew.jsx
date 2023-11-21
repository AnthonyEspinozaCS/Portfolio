import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useCreateNew = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const createNewUser = async (firstName, lastName, company, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, company, email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      return json;
    }
  };

  const createNewJob = async (user_id, job_type, job_status, payment_url) => {
    setIsLoading(true);
    setError(null);
    console.log(user_id, job_type, job_status, payment_url);

    const response = await fetch("http://localhost:3000/jobs/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, job_type, job_status, payment_url }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      return json;
    }
  };

  return { createNewUser, createNewJob, error, isLoading };
};
