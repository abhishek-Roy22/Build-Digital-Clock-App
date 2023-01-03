import React, { useState } from "react";
import "./Clock.scss";
import Sun from "../../assets/svg/sun.svg";
import Moon from "../../assets/svg/moon.svg";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import Pannel from "../Pannel/Pannel";

const Clock = () => {
  const [open, setOpen] = useState(false);

  const D = new Date();
  const Hours = D.getHours();
  const Minutes = D.getMinutes();
  const date = D.getDate();

  // Outputs the day of the week as a name (e.g. "Monday")
  const options = { weekday: "long" };
  const dayName = new Intl.DateTimeFormat("en-US", options).format(D);

  // Outputs the name of the current month
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthIndex = D.getMonth();
  const monthName = monthNames[monthIndex];

  return (
    <div className="clock">
      <div className="left">
        <div className="top">
          {Hours >= 20 ? (
            <img src={Moon} alt="moon_img" />
          ) : (
            <img src={Sun} alt="sun_img" />
          )}
          {Hours >= 20 ? <p>Good Night,</p> : <p>Good Morning,</p>}
          <span>IT'S CURRENTLY</span>
        </div>
        <div className="center">
          <span>
            {Hours}:{Minutes}
          </span>
          <p>India Standard Time</p>
        </div>
        <div className="bottom">
          <p>IN Noida, India</p>
        </div>
      </div>
      <div className="right">
        <span>
          {dayName}, {monthName} {date}
        </span>
        {open ? (
          <button onClick={() => setOpen(!open)} className="openBtn">
            LESS <ArrowDropUpOutlinedIcon />
          </button>
        ) : (
          <button onClick={() => setOpen(!open)} className="openBtn">
            MORE <ArrowDropDownCircleIcon />
          </button>
        )}
      </div>
      {open && <Pannel />}
    </div>
  );
};

export default Clock;
