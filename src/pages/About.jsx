import { Plaque } from "../components/Plaque/Plaque";
import { Nav } from "../components/Nav/Nav";

import s from "./Page.module.scss";

export const About = () => {
  return (
    <>
      <Plaque></Plaque>
      <Nav></Nav>
      <h2>About</h2>
    </>
  );
};
