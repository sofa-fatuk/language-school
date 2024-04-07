import * as React from "react";
const StarIcon = (props) => {
  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={28}
      fill="none"
      {...props}
    >
      <g filter="url(#a)">
        <path
          fill={fill}
          d="m15 0 3.368 10.365h10.898l-8.817 6.405 3.368 10.365L15 20.73l-8.817 6.405L9.551 16.77.734 10.365h10.898L15 0Z"
        />
        <path
          stroke="#8E49A0"
          d="m15 1.618 2.892 8.901.112.346h9.723l-7.572 5.501-.294.213.113.346 2.892 8.901-7.572-5.501-.294-.213-.294.213-7.572 5.501 2.893-8.901.112-.346-.294-.213-7.572-5.501H11.996l.112-.346L15 1.618Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={36.532}
          height={35.135}
          x={-3.266}
          y={-4}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_6_7"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_6_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default StarIcon;
