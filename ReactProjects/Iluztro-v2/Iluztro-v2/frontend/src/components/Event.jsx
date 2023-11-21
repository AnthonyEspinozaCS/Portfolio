import { formatTimestamp } from "../utils/utils";

export const Event = (props) => {
  const { name, location, start_time } = props.data;
  const join_url = location.join_url;

  return (
    <a
      href={join_url}
      className="event__link">
      <div className="event">
        <h3 className="text-accent-2">{name}</h3>
        <h3 className="event__url">{join_url}</h3>
        <h3>{formatTimestamp(start_time)}</h3>
      </div>
    </a>
  );
};
