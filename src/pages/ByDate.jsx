import { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import { Plaque } from "../components/Plaque/Plaque";
import { Nav } from "../components/Nav/Nav";

import s from "./Page.module.scss"; // Import the styles

export const ByDate = () => {
  const [dateInput, setDateInput] = useState({ month: "", day: "" });
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setDateInput({
      ...dateInput,
      [e.target.name]: e.target.value,
    });
  };

  const fetchEventsByDate = async (e) => {
    e.preventDefault();

    const { month, day } = dateInput;

    if (month && day) {
      try {
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
    }
  };

  return (
    <>
      <Plaque>
        <form onSubmit={fetchEventsByDate} className={s.form}>
          <div className={s.inputGroup}>
            <input
              type="text"
              name="day"
              id="day"
              value={dateInput.day}
              onChange={handleInputChange}
              placeholder="DD"
              required
              pattern="\d{2}"
              className={s.inputField}
            />
          </div>
          <div className={s.inputGroup}>
            <input
              type="text"
              name="month"
              id="month"
              value={dateInput.month}
              onChange={handleInputChange}
              placeholder="MM"
              required
              pattern="\d{2}"
              className={s.inputField}
            />
          </div>
          <button type="submit" className={s.button}>
            ⌕
          </button>{" "}
        </form>
        <h3 className={s.ByDateH3}>What happened on this day - Here you can enter a specific date to get only events that happened on this date</h3>
      </Plaque>
      <Nav></Nav>
      {error && <p className={s.error}>{error}</p>}{" "}
      {events.length > 0 ? (
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
            {" "}
            {/* Adding the .line class */}
            <div className={s.circle}></div>
            <h2 className={s.scrollDown}>Scroll down for more</h2>
          </span>
        </section>
      ) : (
        error && <p className={s.error}>No events</p>
      )}
    </>
  );
};
