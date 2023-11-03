export const JobSelect = ({ job, onChange }) => {
  const status = job ? job.status : "Consult";
  return (
    <select
      name="status-update"
      defaultValue={status}
      onChange={(e) => {
        onChange(e.target.value);
      }}>
      <option value="Consult">Consult</option>
      <option value="Awaiting Draft">Awaiting Draft</option>
      <option value="Client Revising">Client Revising</option>
      <option value="Awaiting Payment">Awaiting Payment</option>
      <option value="Completed">Completed</option>
    </select>
  );
};
