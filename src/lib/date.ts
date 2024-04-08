import moment from "moment";

export const getDateInfo = (dt: number, format: "dayOfWeek" | "dayAndTime") => {
  const momentDate = moment.unix(dt);

  if (format === "dayOfWeek") {
    return momentDate.format("ddd");
  } else if (format === "dayAndTime") {
    const dayOfWeek = momentDate.format("ddd");
    const time = momentDate.format("h A");
    return `${dayOfWeek} ${time}`;
  } else {
    throw new Error("Invalid format provided");
  }
};
