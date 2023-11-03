import { JobContext } from "../context/jobContext.jsx";
import { useContext } from "react";

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw Error("useJobContext must be used inside of a JobContextProvider.");
  }

  return context;
};
