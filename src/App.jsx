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
import { About } from "./pages/About";

import { Wrapper } from "./components/Wrapper/Wrapper";
import { Plaque } from "./components/Plaque/Plaque";
import { Nav } from "./components/Nav/Nav";

function App() {
  const getLinkClass = ({ isActive }) => (isActive ? s.active : "");

  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/by_date" element={<ByDate />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Today />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
