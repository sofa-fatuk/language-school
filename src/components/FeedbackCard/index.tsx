import React from "react";

import StarIcon from "../Svgs/StarIcon";

import css from "./style.module.scss";

interface CardProps {
  name: string;
  feedback: string;
  color: string;
  stars: number;
}

const FeedbackCard = (props: CardProps) => {
  const { name, feedback, color, stars } = props;

  const filledStars = Math.min(stars, 5);
  const emptyStars = 5 - filledStars;

  const filledStarElements = Array.from({ length: filledStars }, (_, index) => (
    <StarIcon fill="#8E49A0" />
  ));

  const emptyStarElements = Array.from({ length: emptyStars }, (_, index) => (
    <StarIcon fill="transparent" />
  ));

  return (
    <div className={css.feedback} style={{ backgroundColor: `${color}` }}>
      <div className={css.title}>
        <span className={css.name}>{name}</span>
        <div className={css.stars}>
          {filledStarElements}
          {emptyStarElements}
          {/* <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon /> */}
        </div>
      </div>
      <div className={css.text}>{feedback}</div>
    </div>
  );
};

export default FeedbackCard;
