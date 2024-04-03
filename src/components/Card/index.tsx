import React from "react";
import css from "./style.module.scss";
import ArrowRight from "../Svgs/ArrowRight";
import { Link } from "react-router-dom";

interface CardProps {
  link: string;
  img: string;
  language: string;
  level: string;
  hours: number;
  modules: number;
  price: number;
  width?: number;
  color: string;
}

const Card = (props: CardProps) => {
  const { img, link, language, level, hours, modules, price, width, color } =
    props;

  return (
    <div
      className={css.card}
      style={{ width: `${width}px`, backgroundColor: `${color}` }}
    >
      <div className={css.container}>
        <img className={css.flagImg} src={img} alt="" />
        <span className={css.title}>
          {language} для {level} уровеня
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
