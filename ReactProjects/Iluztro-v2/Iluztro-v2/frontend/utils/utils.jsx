import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function getTimeSinceCreated(timestamp) {
  const convert = dayjs(timestamp);
  const current = dayjs();
  current.utc().format("YYYY-MM-DDTHH:mm:ss.mmm[Z]");
  const difference = current.diff(convert, "day");

  switch (true) {
    case difference === 1:
      return `${difference} day ago`;
    case difference < 31:
      return `${difference} days ago`;
    case difference >= 60:
      return `${difference % 30} months ago`;
    case difference >= 31:
      return "1 month ago";
  }
}
