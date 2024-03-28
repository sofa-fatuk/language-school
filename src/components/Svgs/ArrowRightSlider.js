import * as React from "react";
const ArrowRightSlider = (props) => (
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
      d="m1 13 6-6-6-6"
    />
  </svg>
);
export default ArrowRightSlider;
