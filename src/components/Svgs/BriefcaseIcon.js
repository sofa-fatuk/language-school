import * as React from "react";
const BriefcaseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#2E90D1" opacity={0.2} />
    <path
      fill="#2E90D1"
      d="M43.5 21h-6v-1.5A4.5 4.5 0 0 0 33 15h-6a4.5 4.5 0 0 0-4.5 4.5V21h-6a1.5 1.5 0 0 0-1.5 1.5v6a4.5 4.5 0 0 0 1.5 3.33v8.67A4.5 4.5 0 0 0 21 45h18a4.5 4.5 0 0 0 4.5-4.5v-8.67A4.499 4.499 0 0 0 45 28.5v-6a1.5 1.5 0 0 0-1.5-1.5Zm-18-1.5A1.5 1.5 0 0 1 27 18h6a1.5 1.5 0 0 1 1.5 1.5V21h-9v-1.5Zm15 21A1.5 1.5 0 0 1 39 42H21a1.5 1.5 0 0 1-1.5-1.5V33h3v1.5a1.5 1.5 0 1 0 3 0V33h9v1.5a1.5 1.5 0 1 0 3 0V33h3v7.5Zm1.5-12a1.5 1.5 0 0 1-1.5 1.5h-3v-1.5a1.5 1.5 0 1 0-3 0V30h-9v-1.5a1.5 1.5 0 1 0-3 0V30h-3a1.5 1.5 0 0 1-1.5-1.5V24h24v4.5Z"
    />
  </svg>
);
export default BriefcaseIcon;
