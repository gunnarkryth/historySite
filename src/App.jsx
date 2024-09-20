import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link,
} from "react-router-dom";
// import { useState, useEffect, useReducer } from "react";
import "./assets/styles/App.scss";

import s from "./pages/Page.module.scss";

import { Today } from "./pages/Today";
import { ByDate } from "./pages/ByDate";
import { Since } from "./pages/Since";

import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  const getLinkClass = ({ isActive }) => (isActive ? s.active : "");

  return (
    <Wrapper>
      <Router>
        <div className={s.hero}></div>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link to="/since" className={getLinkClass}>
                SINCE
              </Link>
            </li>
            <li>
              <Link to="/" className={getLinkClass}>
                TODAY
              </Link>
            </li>

            <li>
              <Link to="/by_date" className={getLinkClass}>
                BY DATE
              </Link>
            </li>
          </ul>
          <div className={s.bar}></div>
        </nav>
        <Routes>
          <Route path="/by_date" element={<ByDate />} />
          <Route path="/since" element={<Since />} />
          <Route path="/" element={<Today />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
