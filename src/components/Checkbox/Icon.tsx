import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = ({
  color,
  ...props
}: SVGProps<SVGSVGElement> & { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    style={{ position: "absolute" }}
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.666 5 7.5 14.167 3.333 10"
    />
  </svg>
);

export default SvgComponent;
