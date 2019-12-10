import React from "react";

const alleLetters = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`
];

const WoordHulp = ({ letters }) => {
  return (
    <>
      <div>
        {letters.map((letter, id) => {
          if (alleLetters.includes(letter)) {
            return (
              <img
                src={`./assets/img/` + letter + `.png`}
                alt={letter}
                key={id}
              />
            );
          } else if (letter === ` `) {
            return <p key={id}></p>;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default WoordHulp;
