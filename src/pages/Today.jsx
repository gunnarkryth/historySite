import { useState, useEffect } from "react";

import { Plaque } from "../components/Plaque/Plaque";
import { Nav } from "../components/Nav/Nav";

import s from "./Page.module.scss";

export const Today = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        const response = await fetch(
          `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`
        );
        const data = await response.json();
        console.log(data);

        const fiveEvents = data.events.slice(0, 5);
        setEvents(fiveEvents);
      } catch (error) {
        console.error("Couldn't fetch:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Plaque
        h1="ON THIS DAY"
        h3="What happened on this day - historical events, deaths and
          births thoughout time"
      ></Plaque>
      <Nav></Nav>

      <section className={s.timeLine}>
        <ul>
          {events.map((event, index) => (
            <li key={index} className={s.timeLineElement}>
              <h2>YEAR {event.year}</h2>
              <div className={s.hLine}>
                <div className={s.circle}></div>
              </div>
              <p>{event.text}</p>
            </li>
          ))}
        </ul>
        <span className={s.line}>
          <div className={s.circle}></div>
          <h2 className={s.scrollDown}>Scroll down for more</h2>
        </span>
      </section>
    </>
  );
};
