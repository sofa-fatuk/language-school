import React from "react";
import css from "./style.module.scss";
import ArrowRight from "../Svgs/ArrowRight";

interface CardProps {
  // link: string;
  img: string;
  title: string;
  hours: number;
  modules: number;
  price: number;
  width?: number;
  color: string;
}

const Card = (props: CardProps) => {
  const { img, title, hours, modules, price, width, color } = props;

  return (
    <div
      className={css.card}
      style={{ width: `${width}px`, backgroundColor: `${color}` }}
    >
      <div className={css.container}>
        <img className={css.flagImg} src={img} alt="" />
        <span className={css.title}>{title}</span>
        <div className={css.plan}>
          <span className={css.hours}>
            Длительность: <span className={css.quantity}>{hours} часов</span>
          </span>
          <span className={css.modules}>
            Модулей: <span className={css.quantity}>{modules}</span>
          </span>
        </div>

        <div className={css.more}>
          <div className={css.link}>
            <span>Узнать подробнее </span>
            <ArrowRight />
          </div>
          <div className={css.price}>От {price} Р</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
