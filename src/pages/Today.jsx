import { useState, useEffect } from "react";

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
      <h1>On this day</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h2>{event.year}</h2>
            <p>{event.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
