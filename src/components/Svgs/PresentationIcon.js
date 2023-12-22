import * as React from "react";
const PresentationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill="#78258D" opacity={0.2} />
    <path
      fill="#78258D"
      d="M27.435 29.565a1.498 1.498 0 0 0 2.13 0l6-6a1.506 1.506 0 1 0-2.13-2.13l-4.935 4.95-1.935-1.95a1.506 1.506 0 1 0-2.13 2.13l3 3ZM43.5 33H42V18h1.5a1.5 1.5 0 1 0 0-3h-27a1.5 1.5 0 1 0 0 3H18v15h-1.5a1.5 1.5 0 1 0 0 3h12v1.725l-6.825 4.5A1.5 1.5 0 0 0 22.5 45a1.41 1.41 0 0 0 .825-.255l5.175-3.42V43.5a1.5 1.5 0 1 0 3 0v-2.175l5.175 3.42c.242.17.53.258.825.255a1.5 1.5 0 0 0 .825-2.745l-6.825-4.5V36h12a1.5 1.5 0 1 0 0-3ZM39 33H21V18h18v15Z"
    />
  </svg>
);
export default PresentationIcon;
