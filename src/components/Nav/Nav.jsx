import s from "../../pages/Page.module.scss";

import { NavLink as Link } from "react-router-dom";

import { Today } from "../../pages/Today";
import { ByDate } from "../../pages/ByDate";
import { About } from "../../pages/About";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link to="/about" className={<About />}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/" className={<Today />}>
            TODAY
          </Link>
        </li>

        <li>
          <Link to="/by_date" className={<ByDate />}>
            BY DATE
          </Link>
        </li>
      </ul>
      <div className={s.bar}></div>
    </nav>
  );
};
