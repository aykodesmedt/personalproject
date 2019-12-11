import React, { Component } from "react";
import { withLeapContainer } from "react-leap";
import Menu from "../components/Menu";

class Oefenen extends Component {
  constructor(props) {
    super(props);
    this.state = { dX: this.props.frame.hands };
  }

  componentWillMount() {
    const frame = this.props.frame;
    const hands = frame.hands;
    const interactionBox = frame.interactionBox;

    console.log(this.props.frame.hands);

    if (hands && hands.length) {
      if (hands.length === 1) {
        if (hands[0].fingers[0]) {
          switch (frame.fingers[0].type) {
            case 0:
              const d = interactionBox.normalizePoint(
                frame.fingers[0].positions[0],
                true
              );
              this.setState({ dX: d[0], dY: d[1], dZ: d[2] });
              const d3 = interactionBox.normalizePoint(
                frame.fingers[0].positions[3],
                true
              );
              this.setState({ d3X: d3[0], d3Y: d3[1], d3Z: d3[2] });
              break;
            case 1:
              const w = interactionBox.normalizePoint(
                frame.fingers[0].positions[0],
                true
              );
              this.setState({ wX: w[0], wY: w[1], wZ: w[2] });
              const w3 = interactionBox.normalizePoint(
                frame.fingers[0].positions[3],
                true
              );
              this.setState({ w3X: w3[0], w3Y: w3[1], w3Z: w3[2] });
              break;
            case 2:
              const m = interactionBox.normalizePoint(
                frame.fingers[0].positions[0],
                true
              );
              this.setState({ mX: m[0], mY: m[1], mZ: m[2] });
              const m3 = interactionBox.normalizePoint(
                frame.fingers[0].positions[3],
                true
              );
              this.setState({ m3X: m3[0], m3Y: m3[1], m3Z: m3[2] });
              break;
            case 3:
              const r = interactionBox.normalizePoint(
                frame.fingers[0].positions[0],
                true
              );
              this.setState({ rX: r[0], rY: r[1], rZ: r[2] });
              const r3 = interactionBox.normalizePoint(
                frame.fingers[0].positions[3],
                true
              );
              this.setState({ r3X: r3[0], r3Y: r3[1], r3Z: r3[2] });
              break;
            case 4:
              const p = interactionBox.normalizePoint(
                frame.fingers[0].positions[0],
                true
              );
              this.setState({ pX: p[0], pY: p[1], pZ: p[2] });
              const p3 = interactionBox.normalizePoint(
                frame.fingers[0].positions[3],
                true
              );
              this.setState({ p3X: p3[0], p3Y: p3[1], p3Z: p3[2] });
              break;
            default:
              break;
          }
        }
      }
    }
  }

  render() {
    const hands = this.props.frame.hands;
    console.log(hands);
    return (
      <>
        <Menu />
      </>
    );
  }
}

export default withLeapContainer(Oefenen);
