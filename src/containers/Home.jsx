import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/leren">Leren</Link>
      <Link to="/letters">Letters</Link>
      <Link to="/woorden">Woorden</Link>
    </>
  );
};

export default Home;
