import React from "react";

export default function HoursList(props) {
  const { hours } = props;
  const hoursList = hours.weekday_text.map((hour, index) => (
    <li key={index}>
      {hour
        .replace("rsday", "")
        .replace("urday", "")
        .replace("nesday", "")
        .replace("sday", "")
        .replace("day", "")}
    </li>
  ));
  return <ul className="hours-list">{hoursList}</ul>;
}
