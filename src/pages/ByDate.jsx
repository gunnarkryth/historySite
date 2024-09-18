import { useState, useEffect } from "react";

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
        const fiveEvents = data.events.slice(0, 5);
        setEvents(fiveEvents);
      } catch (error) {
        console.error("Couldn't fetch:", error);
      }
    }
  };

  return (
    <>
      <h1>BY DAY</h1>
      <form onSubmit={fetchEventsByDate}>
        <div>
          <label htmlFor="month">Month (MM):</label>
          <input
            type="text"
            name="month"
            id="month"
            value={dateInput.month}
            onChange={handleInputChange}
            placeholder="MM"
            required
            pattern="\d{2}"
          />
        </div>
        <div>
          <label htmlFor="day">Day (DD):</label>
          <input
            type="text"
            name="day"
            id="day"
            value={dateInput.day}
            onChange={handleInputChange}
            placeholder="DD"
            required
            pattern="\d{2}"
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h2>{event.year}</h2>
              <p>{event.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>No events</p>
      )}
    </>
  );
};
