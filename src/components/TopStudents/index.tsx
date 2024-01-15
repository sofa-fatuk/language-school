import React from "react";
import css from "./style.module.scss";
import { Link } from "react-router-dom";

const students = [
  {
    url: "/",
    name: "Мария Котельникова",
    point: 300,
  },
  {
    url: "/",
    name: "Андрей Иванович",
    point: 296,
  },
  {
    url: "/",
    name: "Софья Фатюк",
    point: 295,
  },
];

const TopStudents = () => {
  return (
    <div className={css.rating}>
      <h3 className={css.title}>Лучшие ученики</h3>
      <div className={css.students}>
        {students.map((item, index) => (
          <div className={css.student}>
            <div className={css.info}>
              <span className={css.number}>{index + 1}</span>
              <span className={css.name}>{item.name}</span>
            </div>
            <span className={css.point}>{item.point} баллов</span>
          </div>
        ))}
        <Link to="/" className={css.link}>
          Смотреть всю статистику
        </Link>
      </div>
    </div>
  );
};

export default TopStudents;
