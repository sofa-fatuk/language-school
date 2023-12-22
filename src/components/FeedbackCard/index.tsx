import React from "react";
import css from "./style.module.scss";
import StarIcon from "../Svgs/StarIcon";

const FeedbackCard = () => {
  return (
    <div className={css.feedback}>
      <div className={css.title}>
        <span className={css.name}>Артем М.</span>
        <div className={css.stars}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <div className={css.text}>
        Занятия курса очень понравились, в основном благодаря необычной системе
        — я человек настроения и не могу подстраиваться под график
        индивидуального репетитора или тем более целой группы. Иногда занимался
        несколько часов подряд — настолько легко и интересно организована подача
        материала, а один раз по болезни пропустил целую неделю.
      </div>
    </div>
  );
};

export default FeedbackCard;
