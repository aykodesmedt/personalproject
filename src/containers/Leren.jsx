import React, { Component } from "react";

import Menu from "../components/Menu.jsx";
import Hand from "../components/Hand.jsx";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

class Leren extends Component {
  constructor(props) {
    super(props);
    this.state = { letter: "a" };
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
        {/* {console.log(this.state)} */}
        <Hand letter={this.state.letter} />
      </>
    );
  }
}

export default Leren;
