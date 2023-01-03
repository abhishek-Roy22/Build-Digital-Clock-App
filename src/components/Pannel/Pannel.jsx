import React from "react";
import "./Pannel.scss";

const Pannel = () => {
  // DAY OF THE Week
  let dayofWeek = new Date().getDay();
  const day = (dayofWeek += 1);

  // Day of the year
  const date = new Date();
  const days = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dayOfYear = Math.floor(
    (Date.UTC(year, month, days) - Date.UTC(year, 0, 0)) / (1000 * 60 * 60 * 24)
  );

  const getWeekOfYear = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);

    const dayOfWeek = firstDayOfYear.getDay();

    const firstDayOfWeek = firstDayOfYear.getTime() - dayOfWeek * 86400000;

    const weekOfYear = Math.floor(
      ((dayOfYear - 1) * 86400000 + (date.getTime() - firstDayOfWeek)) /
        604800000
    );

    return weekOfYear;
  };

  const weekOfYear = getWeekOfYear(date);

  return (
    <div className="pannel">
      <div className="left">
        <p>CURRENT TIMEZONE</p>
        <span>Asia/Calcutta</span>
        <p>DAY OF THE YEAR</p>
        <span>{dayOfYear}</span>
      </div>
      <div className="right">
        <p>DAY OF THE WEEK</p>
        <span>{day}</span>
        <p>WEEK NUMBER</p>
        <span>{weekOfYear}</span>
      </div>
    </div>
  );
};

export default Pannel;
