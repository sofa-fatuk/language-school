import React from "react";
import css from "./style.module.scss";
import ArrowRight from "../Svgs/ArrowRight";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  date: string;
  description?: string;
  type: string;
  link: string;
}

const NewsCard = (props: CardProps) => {
  const { title, date, description, type, link } = props;

  const typeColors: Record<string, string> = {
    Новость: "#EFEFFF",
    Статья: "#DEF1FF",
    Интересное: "#FFEFEF",
  };

  const typeColor = typeColors[type] || "#EFEFFF";

  return (
    <div className={css.card}>
      <h3 className={css.title}>{title}</h3>
      <span className={css.date}>{date}</span>
      <p className={css.description}>{description}</p>
      <div className={css.more}>
        <div className={css.type} style={{ background: typeColor }}>
          {type}
        </div>
        <div className={css.link}>
          <Link to={link}>Подробнее</Link>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
