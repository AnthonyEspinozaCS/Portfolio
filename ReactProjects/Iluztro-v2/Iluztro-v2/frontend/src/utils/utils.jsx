import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/en";

dayjs.extend(utc);
dayjs.extend(timezone);

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

export function formatTimestamp(timestamp) {
  const timeZone = dayjs.tz.guess();
  dayjs.tz.setDefault(timeZone);
  const convert = dayjs(timestamp.substring(0, 22) + "Z");
  console.log(convert.local().format("MM/DD/YY h:mm A"));

  return convert.local().format("ddd, MMM DD @ h:mm A");
}

export function splitName(name) {
  const temp = name.split(" ");

  return { first_name: temp[0], last_name: temp[1] };
}
