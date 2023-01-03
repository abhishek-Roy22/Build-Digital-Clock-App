import Quotes from "./components/Quotes/Quotes";
import "./app.scss";
import Clock from "./components/Clock/Clock";
import { useEffect, useState } from "react";

function App() {
  const [timeofDay, setTimeofDay] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setTimeofDay("morning");
    } else if (hour < 16) {
      setTimeofDay("afternoon");
    } else if (hour < 20) {
      setTimeofDay("evening");
    } else {
      setTimeofDay("night");
    }
  }, []);

  let backgroundUrl;
  if (timeofDay === "morning") {
    backgroundUrl =
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  } else if (timeofDay === "afternoon") {
    backgroundUrl =
      "https://images.unsplash.com/photo-1535477904881-7dfea0fb80c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80";
  } else if (timeofDay === "evening") {
    backgroundUrl =
      "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg";
  } else {
    backgroundUrl =
      "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80";
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <Quotes />
      <Clock />
    </div>
  );
}

export default App;
