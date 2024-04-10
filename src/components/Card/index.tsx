import React from "react";
import { Link } from "react-router-dom";

import ArrowRight from "../Svgs/ArrowRight";

import css from "./style.module.scss";

interface Course {
  img: string;
  language: string;
  level: string;
  hours: number;
  modules: number;
  price: number;
  color: string;
}

interface CardProps {
  item: Course;
  width?: number;
  link: string;
}

const Card = (props: CardProps) => {
  const { width, item, link } = props;
  const { img, language, level, hours, modules, price, color } = item;

  return (
    <div
      className={css.card}
      style={{ width: `${width}px`, backgroundColor: `${color}` }}
    >
      <div className={css.container}>
        <img className={css.flagImg} src={img} alt="" />
        <span className={css.title}>
          {language} для {level} уровня
        </span>
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
            <Link to={link} className={css.link}>
              Узнать подробнее
            </Link>
            <ArrowRight />
          </div>
          <div className={css.price}>От {price} Р</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
