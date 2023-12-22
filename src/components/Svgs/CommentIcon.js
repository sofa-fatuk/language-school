import * as React from "react";
const CommentIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#E42125" opacity={0.2} />
    <path
      fill="#E42125"
      d="M37.5 22.5h-15a1.5 1.5 0 1 0 0 3h15a1.5 1.5 0 1 0 0-3Zm0 6h-15a1.5 1.5 0 1 0 0 3h15a1.5 1.5 0 1 0 0-3Zm3-13.5h-21a4.5 4.5 0 0 0-4.5 4.5v15a4.5 4.5 0 0 0 4.5 4.5h17.385l5.55 5.565A1.502 1.502 0 0 0 43.5 45a1.26 1.26 0 0 0 .57-.12A1.5 1.5 0 0 0 45 43.5v-24a4.5 4.5 0 0 0-4.5-4.5ZM42 39.885l-3.435-3.45A1.502 1.502 0 0 0 37.5 36h-18a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 1.5 1.5v20.385Z"
    />
  </svg>
);
export default CommentIcon;
