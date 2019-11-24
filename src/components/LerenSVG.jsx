import React from "react";

const LerenSVG = ({ width, height, color }) => {
  if (color === `kleur`) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 125"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Group</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Illustrations"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Desktop-HD"
            transform="translate(-115.000000, -537.000000)"
            stroke="#000000"
            strokeWidth="2"
          >
            <g id="Group" transform="translate(116.000000, 538.000000)">
              <path
                d="M8,123 C3.581722,123 1.14227921e-13,119.418278 1.13686838e-13,115 L1.13686838e-13,8 C1.12257576e-13,3.581722 3.581722,8.11624501e-16 8,0 L98,0 L98,123 L8,123 Z"
                id="Combined-Shape-Copy"
                fill="#EF4D39"
              ></path>
              <path
                d="M8,107 C3.66508574,107 0.135457134,110.447838 0.00380682464,114.750821 L9.9475983e-14,115 L-1.42108547e-14,8 C-1.56401161e-14,3.581722 3.581722,8.11624501e-16 8,0 L98,0 L98,107 L8,107 Z"
                id="Combined-Shape-Copy-2"
                fill="#F6D135"
              ></path>
              <rect
                id="Rectangle-Copy"
                fill="#AF77F4"
                x="18"
                y="19"
                width="63"
                height="30"
              ></rect>
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
        viewBox="0 0 26 33"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Group 6 Copy</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Illustrations"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Desktop-HD"
            transform="translate(-1009.000000, -184.000000)"
            stroke="#FFFFFF"
          >
            <g id="Group-6-Copy" transform="translate(1010.000000, 185.000000)">
              <path
                d="M2,30.75 C0.8954305,30.75 1.22889645e-13,29.8545695 1.20792265e-13,28.75 L1.20792265e-13,2 C1.2043495e-13,0.8954305 0.8954305,7.30833348e-15 2,7.10542736e-15 L24.5,7.10542736e-15 L24.5,30.75 L2,30.75 Z"
                id="Combined-Shape"
              ></path>
              <path
                d="M1.13686838e-13,28.5 C1.13832676e-13,29.690864 0.925161591,30.6656449 2.09595119,30.7448092 L2.224,30.749 L2,30.75 C0.8954305,30.75 9.20280769e-15,29.8545695 7.10542736e-15,28.75 L1.13686838e-13,28.5 L1.13686838e-13,28.5 Z M2.25,26.25 C1.00735931,26.25 1.13534658e-13,27.2573593 1.13686838e-13,28.5 L7.10542736e-15,2 C6.748112e-15,0.8954305 0.8954305,-6.90252123e-15 2,-7.10542736e-15 L24.5,-1.42108547e-14 L24.5,26.25 L2.25,26.25 Z"
                id="Combined-Shape"
              ></path>
              <rect
                id="Rectangle"
                x="4.5"
                y="4.75"
                width="15.75"
                height="7.5"
              ></rect>
            </g>
          </g>
        </g>
      </svg>
    );
  }
};

export default LerenSVG;
