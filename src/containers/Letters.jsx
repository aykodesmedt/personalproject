import React, { Component } from "react";
import Menu from "../components/Menu.jsx";

import Webcam from "../components/Webcam.jsx";

const letters = [
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

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = { letter: `A` };
    this.handleClickLetter = this.handleClickLetter.bind(this);
  }

  handleClickLetter(e) {
    console.log(e);
    this.setState(state => ({
      letter: e
    }));
  }

  render() {
    return (
      <>
        <Menu />
        {letters.map(letter => {
          return (
            <button
              onClick={e => this.handleClickLetter(e.currentTarget.innerHTML)}
              key={letter}
            >
              {letter}
            </button>
          );
        })}
        <Webcam letter={this.state.letter} />
      </>
    );
  }
}

export default Letters;
