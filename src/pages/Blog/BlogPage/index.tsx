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

const news = [
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    date: "05-06-2022",
    type: "Новость",
    link: "/",
  },
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    date: "05-06-2022",
    type: "Новость",
    link: "/",
  },
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    date: "05-06-2022",
    type: "Новость",
    link: "/",
  },
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className={css.layout}>
        <div className={css.infoBlock}>
          <div className={css.wrapper}>
            <h2 className={css.name}>
              Новая система скидок в <br /> Language2GO: успейте забрать
              максимум!
            </h2>
            <span className={css.date}>05-06-2022</span>
            <div className={css.description}>
              <p>
                Для многих стоимость изучения иностранного языка является важным
                критерием при выборе системы обучения. Именно поэтому мы
                предлагаем нашим клиентам не только бесплатные пробные уроки, но
                и гибкую систему скидок, которая позволит существенно снизить
                затраты.
              </p>
              <p>
                Начните с выбора оптимальной программы обучения: бесплатное
                тестирование определит ваш уровень знаний и предложит лучший
                вариант для быстрого прогресса. Следующий шаг — активация купона
                и приятное изменение стоимости курса в меньшую сторону.
              </p>
              <p>
                Купоны на скидку можно найти в соцсетях Language2GO, получить в
                рассылке для лояльных клиентов или в приобрести в подарок для
                ваших близких, а бесплатные уроки ждут всех желающих на нашем
                сайте!
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
      <Footer />
    </>
  );
};

export default BlogPage;
