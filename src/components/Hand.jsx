import React from "react";
import PropTypes from "prop-types";

const Hand = ({ letter }) => {
  return (
    <>
      <p>{letter}</p>
    </>
  );
};

Hand.propTypes = {
  letter: PropTypes.string.isRequired
};

export default Hand;
