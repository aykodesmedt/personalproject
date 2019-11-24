import React from "react";

const WoordHulp = ({ letters }) => {
  return (
    <>
      {letters.map((letter, id) => {
        // return <p key={id}>{letter}</p>;
        return (
          <img src={`./assets/img/` + letter + `.png`} alt={letter} key={id} />
        );
      })}
    </>
  );
};

export default WoordHulp;
