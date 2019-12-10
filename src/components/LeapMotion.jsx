import React, { Component } from "react";
import data from "./letterDataNew3000";
// import * as tf from "@tensorflow/tfjs";

// let xs, ys;
// let model;
// let labelP;
// let lossP;

// let dX,
//   dY,
//   dZ,
//   wX,
//   wY,
//   wZ,
//   mX,
//   mY,
//   mZ,
//   rX,
//   rY,
//   rZ,
//   pX,
//   pY,
//   pZ,
//   d3X,
//   d3Y,
//   d3Z,
//   w3X,
//   w3Y,
//   w3Z,
//   m3X,
//   m3Y,
//   m3Z,
//   r3X,
//   r3Y,
//   r3Z,
//   p3X,
//   p3Y,
//   p3Z;

// let labelList = [`A`, `B`, `C`];

class LeapMotion extends Component {
  constructor(props) {
    super(props);
    this.state = { letter: `` };
  }

  render() {
    // tf.tensor1d(labelList, `int32`);
    console.log(data);
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default LeapMotion;
