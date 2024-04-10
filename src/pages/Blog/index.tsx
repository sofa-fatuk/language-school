import React, { useState } from "react";
import { Header } from "../../components/Header";
import { getNews } from "../../api/news";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import FilterItem from "../../components/FilterItem";
import NewsCard from "../../components/NewsCard";
import Footer from "../../components/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";
import PaginatedItems from "../../components/PaginatedItems";

import css from "./style.module.scss";

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

const Blog = () => {
  const location = useLocation();

  const [activeFilters, setActiveFilters] = useState<number[]>([]);

  const { data: news = [] } = useQuery({
    queryKey: ["news", location.search],
    queryFn: getNews,
  });

  console.log();

  const renderItem = (item: any) => {
    return (
      <div
        key={item.index}
        className={`${
          item.index === 0 || item.index % 5 === 0
            ? css.fullWidth
            : css.smallWidth
        }`}
      >
        <NewsCard
          title={item.title}
          date={item.date}
          description={item.description}
          type={item.type}
          link={`/news/${item.id}`}
        />
      </div>
    );
  };

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

  return (
    <>
      <Header />
      <div className={css.layout}>
        <BreadCrumbs
          items={[
            { path: "/", breadcrumb: "Главная" },
            { path: "/news", breadcrumb: "Блог" },
          ]}
        />
        <div className={css.wrapper}>
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
            {/* <div className={css.news}>
              <PaginatedItems renderItem={renderItem} items={news} />
            </div> */}
          </div>
          <div className={css.image} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
