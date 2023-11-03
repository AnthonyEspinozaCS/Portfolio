import React from "react";

export const JobType = ({ onChange }) => {
  return (
    <select
      name="status-update"
      defaultValue="Logo"
      onChange={(e) => {
        onChange(e.target.value);
      }}>
      <option value="Logo">Logo</option>
      <option value="Executive Summary">Executive Summary</option>
      <option value="Website">Website</option>
      <option value="Flyer">Flyer</option>
      <option value="Brochure">Brochure</option>
      <option value="Business Cards">Business Cards</option>
      <option value="Bundle">Bundle</option>
    </select>
  );
};
