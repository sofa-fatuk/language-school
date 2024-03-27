import React from "react";
import css from "./style.module.scss";
import StarIcon from "../Svgs/StarIcon";

interface CardProps {
  name: string;
  feedback: string;
  color: string;
  // stars: number
}

const FeedbackCard = (props: CardProps) => {
  const { name, feedback, color } = props;

  return (
    <div className={css.feedback} style={{ backgroundColor: `${color}` }}>
      <div className={css.title}>
        <span className={css.name}>{name}</span>
        <div className={css.stars}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className={css.text}>{feedback}</div>
    </div>
  );
};

export default FeedbackCard;
