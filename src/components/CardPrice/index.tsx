import React from "react";
import css from "./style.module.scss";
import PurpleButton from "../PurpleButton";

interface IProps {
  img: string;
  price: number;
  lessons: number;
  tasks: number;
  tests: number;
  expertHours: number;
}

const CardPrice = (props: IProps) => {
  const { img, price, lessons, tasks, tests, expertHours } = props;

  return (
    <div className={css.courseItem}>
      <div className={css.cost}>
        <div className={css.price}>
          <p>Стоимость</p>
          <span className={css.title}>От {price} Р</span>
        </div>
        <img src={img} alt="" />
      </div>
      <div className={css.infoList}>
        <div className={css.info}>
          <span className={css.number}>{lessons}</span>
          <span className={css.name}>Уроков</span>
        </div>
        <div className={css.info}>
          <span className={css.number}>{tasks}</span>
          <span className={css.name}>Заданий</span>
        </div>
        <div className={css.info}>
          <span className={css.number}>{tests}</span>
          <span className={css.name}>Тестов</span>
        </div>
        <div className={css.info}>
          <span className={css.number}>{expertHours}</span>
          <span className={css.name}>Занятий с экспертом</span>
        </div>
      </div>
      <PurpleButton value="Записаться на курс" />
    </div>
  );
};

export default CardPrice;
