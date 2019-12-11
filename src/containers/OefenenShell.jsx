import React from "react";
import { LeapProvider } from "react-leap";
import Oefenen from "./Oefenen";
// import Menu from "../components/Menu";

const OefenenShell = () => {
  return (
    <>
      {/* <Menu /> */}
      <LeapProvider options={{ enableGestures: true }}>
        <Oefenen />
      </LeapProvider>
    </>
  );
};

export default OefenenShell;
