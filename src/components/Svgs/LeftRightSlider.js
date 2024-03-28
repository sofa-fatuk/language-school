import * as React from "react";
const LeftRightSlider = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#641F76"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 1 1 7l6 6"
    />
  </svg>
);
export default LeftRightSlider;
