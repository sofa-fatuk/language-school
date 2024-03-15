import React from "react";
import css from "./style.module.scss";
import { Header } from "../../../components/Header";
import FacebookIcon from "../../../components/Svgs/FacebookIcon";
import YouTubeIcon from "../../../components/Svgs/YouTubeIcon";
import TwitIcon from "../../../components/Svgs/TwitIcon";
import VkIcon from "../../../components/Svgs/VkIcon";
import WhiteButton from "../../../components/WhiteButton ";
import NewsCard from "../../../components/NewsCard";
import Footer from "../../../components/Footer";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../../api/news";

const BlogPage = () => {
  const { data: news = [] } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  return (
    <>
      <Header />
      <div className={css.layout}>
        <BreadCrumbs
          items={[
            { path: "/", breadcrumb: "Главная" },
            { path: "/blog", breadcrumb: "Блог" },
            { path: "/blog/blog-page", breadcrumb: "Статья подробно" }, //правка id
          ]}
        />
        <div className={css.wrapper}>
          <div className={css.infoBlock}>
            <div className={css.info}>
              <h2 className={css.name}>
                Новая система скидок в <br /> Language2GO: успейте забрать
                максимум!
              </h2>
              <span className={css.date}>05-06-2022</span>
              <div className={css.description}>
                <p>
                  Для многих стоимость изучения иностранного языка является
                  важным критерием при выборе системы обучения. Именно поэтому
                  мы предлагаем нашим клиентам не только бесплатные пробные
                  уроки, но и гибкую систему скидок, которая позволит
                  существенно снизить затраты.
                </p>
                <p>
                  Начните с выбора оптимальной программы обучения: бесплатное
                  тестирование определит ваш уровень знаний и предложит лучший
                  вариант для быстрого прогресса. Следующий шаг — активация
                  купона и приятное изменение стоимости курса в меньшую сторону.
                </p>
                <p>
                  Купоны на скидку можно найти в соцсетях Language2GO, получить
                  в рассылке для лояльных клиентов или в приобрести в подарок
                  для ваших близких, а бесплатные уроки ждут всех желающих на
                  нашем сайте!
                </p>
              </div>
              <div className={css.subscription}>
                <div className={css.level}>Для начинающих</div>
                <div className={css.socials}>
                  <p className={css.text}>Поделиться:</p>
                  <div className={css.socialsBlock}>
                    <FacebookIcon fill="#78258D" />
                    <YouTubeIcon fill="#78258D" />
                    <TwitIcon fill="#78258D" />
                    <VkIcon fill="#78258D" />
                  </div>
                </div>
              </div>
            </div>

            <div className={css.container}>
              <h3 className={css.title}>Другие новости</h3>
              <WhiteButton value="Все новости" />
            </div>
            <div className={css.news}>
              {news.map((item) => (
                <NewsCard
                  title={item.title}
                  date={item.date}
                  type={item.type}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          <div className={css.image} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
