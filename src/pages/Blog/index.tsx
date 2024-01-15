import React, { useState } from "react";
import css from "./style.module.scss";
import { Header } from "../../components/Header";
import FilterItem from "../../components/FilterItem";
import NewsCard from "../../components/NewsCard";
import Footer from "../../components/Footer";

const filters = [
  {
    name: "Все",
  },
  {
    name: "Новости",
  },
  {
    name: "Статьи",
  },
  {
    name: "Интересное",
  },
];

const news = [
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Новость",
    link: "/blog/blog-page",
  },
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Статья",
    link: "/blog/blog-page",
  },
  {
    title:
      "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Интересное",
    link: "/blog/blog-page",
  },
  {
    title:
      "Новое слово в изучении иностранных языков: интерактивная платформа ...",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Статья",
    link: "/blog/blog-page",
  },
  {
    title:
      "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Интересное",
    link: "/blog/blog-page",
  },
];

const Blog = () => {
  const [activeFilters, setActiveFilters] = useState<number[]>([]);

  const onClickFilter = (index: number, toggleAll: boolean) => {
    setActiveFilters((prevFilters) => {
      if (toggleAll) {
        return prevFilters.length === filters.length
          ? []
          : filters.map((filter, index) => index);
      }
      return [index];
    });
  };

  console.log(activeFilters);

  return (
    <>
      <Header />
      <div className={css.layout}>
        <div className={css.infoBlock}>
          <h2 className={css.title}>Блог</h2>
          <h2 className={css.nameSchool}>Language to go</h2>
          <p className={css.subtitle}>
            Будьте в курсе наших событий. Следите за нашими новостями
          </p>
          <div className={css.filters}>
            {filters.map((item, index) => (
              <FilterItem
                key={index}
                filter={item}
                active={activeFilters.includes(index)}
                onClick={onClickFilter}
                index={index}
              />
            ))}
          </div>
          <div className={css.news}>
            {news.map((item, index) => (
              <div
                key={index}
                className={`${index === 0 ? css.fullWidth : css.smallWidth}`}
              >
                <NewsCard
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  type={item.type}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={css.image} />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
