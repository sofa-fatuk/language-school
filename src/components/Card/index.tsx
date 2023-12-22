import React from "react";
import css from "./style.module.scss";
import ArrowRight from "../Svgs/ArrowRight";

const Card = () => {
  return (
    <div className={css.card}>
      <div className={css.container}>
        <img className={css.flagImg} src="img/flags/german.svg" alt="" />
        <span className={css.title}>Немецкий для начального уровня</span>
        <div className={css.plan}>
          <span className={css.hours}>
            Длительность: <span className={css.quantity}>45 часов</span>
          </span>
          <span className={css.modules}>
            Модулей: <span className={css.quantity}>3</span>
          </span>
        </div>

        <div className={css.more}>
          <div className={css.link}>
            <span>Узнать подробнее </span>
            <ArrowRight />
          </div>
          <div className={css.price}>От 6 520 Р</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
