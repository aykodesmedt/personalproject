import React from "react";
import { Link } from "react-router-dom";

import LettersGroot from "./../components/LettersGroot.jsx";
import LerenGroot from "./../components/LerenGroot.jsx";
import WoordenGroot from "./../components/WoordenGroot.jsx";

const Home = () => {
  return (
    <>
      <h1>Vlaamse Gebarentaal Alfabet</h1>
      <ul>
        <li>
          <Link to="/leren">
            <LerenGroot />
            Leren
          </Link>
        </li>
        <li>
          <Link to="/letters">
            <LettersGroot />
            Letters
          </Link>
        </li>
        <li>
          <Link to="/woorden">
            <WoordenGroot />
            Woorden
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
