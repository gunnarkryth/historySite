import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useState, useEffect, useReducer } from "react";
import "./assets/styles/App.scss";

import { Today } from "./pages/Today";
import { ByDate } from "./pages/ByDate";
import { Since } from "./pages/Since";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">TODAY</Link>
            <Link to="/by_date">BY DATE</Link>
            <Link to="/since">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/by_date" element={<ByDate />} />
        <Route path="/since" element={<Since />} />
      </Routes>
    </Router>
  );
}

export default App;
