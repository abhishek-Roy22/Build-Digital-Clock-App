import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Quotes.scss";
import Refresh from "../../assets/svg/refresh.svg";

const Quotes = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="quotes">
      <div className="top">
        <h4 className="quote">"{data.content}"</h4>
        <img src={Refresh} alt="refresh_btn" onClick={handleClick} />
      </div>
      <span className="author">{data.author}</span>
    </div>
  );
};

export default Quotes;
