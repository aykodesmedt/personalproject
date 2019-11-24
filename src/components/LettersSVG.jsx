import React from "react";

// klein:
// groot: 125, 125

const LettersSVG = ({ width, height, color }) => {
  if (color === `kleur`) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 125 125"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Group 2</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Illustrations"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Desktop-HD" transform="translate(-251.000000, -537.000000)">
            <g id="Group-2" transform="translate(252.000000, 538.000000)">
              <rect
                id="Rectangle-Copy-2"
                stroke="#000000"
                strokeWidth="2"
                fill="#53CABC"
                x="0"
                y="0"
                width="123"
                height="123"
                rx="4"
              ></rect>
              <text
                id="A-Copy"
                fontFamily="Montserrat-Medium, Montserrat"
                fontSize="60"
                fontWeight="400"
                fill="#000000"
              >
                <tspan x="40" y="83">
                  A
                </tspan>
              </text>
              <text
                id="1-copy"
                fontFamily="Montserrat-Regular, Montserrat"
                fontSize="18"
                fontWeight="normal"
                fill="#000000"
              >
                <tspan x="108" y="110">
                  1
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 33"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Group 7 Copy</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Illustrations"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Desktop-HD" transform="translate(-1053.000000, -184.000000)">
            <g id="Group-7-Copy" transform="translate(1054.000000, 185.000000)">
              <rect
                id="Rectangle"
                stroke="#FFFFFF"
                x="1.42108547e-14"
                y="7.10542736e-15"
                width="30.75"
                height="30.75"
                rx="2"
              ></rect>
              <path
                d="M11.53,20.75 L12.685,18.125 L18.265,18.125 L19.42,20.75 L20.995,20.75 L16.225,10.25 L14.74,10.25 L9.985,20.75 L11.53,20.75 Z M17.74,16.925 L13.21,16.925 L15.475,11.78 L17.74,16.925 Z"
                id="A"
                fill="#FFFFFF"
                fillRule="nonzero"
              ></path>
              <polygon
                id="1"
                fill="#FFFFFF"
                fillRule="nonzero"
                points="28.107 27.5 28.107 24.35 27.0405 24.35 27.0405 24.638 27.783 24.638 27.783 27.5"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
    );
  }
};

export default LettersSVG;
