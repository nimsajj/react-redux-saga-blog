import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timestamp }) => {
  if (!timestamp) {
    return null;
  }

  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  const timeAgo = `${timePeriod} ago`;

  return (
    <span title={timestamp}>
      &nbsp;<i>{timeAgo}</i>
    </span>
  );
};
