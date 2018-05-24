import React from "react";

export default function HoursList(props) {
  const { hours } = props;
  const hoursList = hours.weekday_text.map((hour, index) => (
    <tbody key={index}>
      <tr>
        <th>
          {hour
            .split("day:")[0]
            .replace("rs", "")
            .replace("ur", "")
            .replace("nes", "")
            .replace("s", "")}:
        </th>
        <td>{hour.split("day:")[1]}</td>
      </tr>
    </tbody>
  ));
  return <table className="hours-list">{hoursList}</table>;
}
