import React from "react";
import css from "./style.module.scss";
import NewsCard from "../NewsCard";

import { getRecommendedNews } from "../../api/news";
import { useQuery } from "@tanstack/react-query";

const SuggestedNews = () => {
  const { data: news = [] } = useQuery({
    queryKey: ["news"],
    queryFn: getRecommendedNews,
  });

  return (
    <div className={css.news}>
      {news.map((item) => (
        <NewsCard
          title={item.title}
          date={item.date}
          description={item.description}
          type={item.type}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default SuggestedNews;
