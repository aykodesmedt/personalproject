import React from "react";
import { Link } from "react-router-dom";

import LettersSVG from "./../components/LettersSVG.jsx";
import LerenSVG from "./../components/LerenSVG.jsx";
import WoordenSVG from "./../components/WoordenSVG.jsx";

const Home = () => {
  return (
    <>
      <h1>Vlaamse Gebarentaal Alfabet</h1>
      <ul>
        <li>
          <Link to="/leren">
            <LerenSVG width="100" height="125" color="kleur" />
            Leren
          </Link>
        </li>
        <li>
          <Link to="/letters">
            <LettersSVG width="125" height="125" color="kleur" />
            Letters
          </Link>
        </li>
        <li>
          <Link to="/woorden">
            <WoordenSVG width="122" height="124" color="kleur" />
            Woorden
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
