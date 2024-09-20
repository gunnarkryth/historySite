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
        <h1>ON THIS DAY</h1>
        <h3></h3>
      </Plaque>
      <Nav></Nav>
      
      <h1 className={s.header}>BY DAY</h1>{" "}
      {/* Add a class for the header if needed */}
      <form onSubmit={fetchEventsByDate} className={s.form}>
        <div className={s.inputGroup}>
          {/* <label htmlFor="day">Day (DD):</label> */}
          <input
            type="text"
            name="day"
            id="day"
            value={dateInput.day}
            onChange={handleInputChange}
            placeholder="DD"
            required
            pattern="\d{2}"
            className={s.inputField} // Apply class for inputs
          />
        </div>
        <div className={s.inputGroup}>
          {/* <label htmlFor="month">Month (MM):</label> */}
          <input
            type="text"
            name="month"
            id="month"
            value={dateInput.month}
            onChange={handleInputChange}
            placeholder="MM"
            required
            pattern="\d{2}"
            className={s.inputField} // Apply class for inputs
          />
        </div>
        <button type="submit" className={s.button}>
          ⌕
        </button>{" "}
        {/* Style the button */}
      </form>
      {error && <p className={s.error}>{error}</p>}{" "}
      {/* Apply a class for errors */}
      {events.length > 0 ? (
        <section className={s.timeLine}>
          <ul>
            {events.map((event, index) => (
              <li key={index} className={s.timeLineElement}>
                <h2>{event.year}</h2>
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
