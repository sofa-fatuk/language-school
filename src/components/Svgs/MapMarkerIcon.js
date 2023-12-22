import * as React from "react";
const MapMarkerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#FFB800" opacity={0.2} />
    <path
      fill="#FFB800"
      d="M30 15a12 12 0 0 0-12 12c0 8.1 10.575 17.25 11.025 17.64a1.5 1.5 0 0 0 1.95 0C31.5 44.25 42 35.1 42 27a12 12 0 0 0-12-12Zm0 26.475c-3.195-3-9-9.465-9-14.475a9 9 0 0 1 18 0c0 5.01-5.805 11.49-9 14.475ZM30 21a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 9a3 3 0 1 1 0-5.999A3 3 0 0 1 30 30Z"
    />
  </svg>
);
export default MapMarkerIcon;
