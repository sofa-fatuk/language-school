import React from "react";
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect width={32} height={32} fill="#78258D" rx={4} />
    <path
      stroke="#EFEFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.6 9.4 9.4 22.6M9.4 9.4l13.2 13.2"
    />
  </svg>
);
export default CloseIcon;
