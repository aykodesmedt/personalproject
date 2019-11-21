import React from "react";

const WoordHulp = ({ letters }) => {
  return (
    <>
      {letters.map((letter, id) => {
        return <p key={id}>{letter}</p>;
      })}
    </>
  );
};

export default WoordHulp;
