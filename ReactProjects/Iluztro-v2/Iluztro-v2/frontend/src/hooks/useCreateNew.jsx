import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useCreateNew = async () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const createNewUser = async (name, email, company, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3000/users/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, company, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
    }
  };

  const createNewJob = async (type_job, status) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3000/jobs/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type_job, status }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
    }
  };

  return { error, isLoading, createNewUser, createNewJob };
};
