import React from "react";
import css from "./style.module.scss";
import WhiteButton from "../WhiteButton ";
import ArrowRight from "../Svgs/ArrowRight";

const SpecialNews = () => {
  return (
    <div className={css.news}>
      <div className={css.container}>
        <h2 className={css.title}>Полезные новости и статьи</h2>
        <WhiteButton value="Все новости" />
      </div>
      <div className={css.blockNews}>
        <div className={css.item}>
          <h3 className={css.name}>
            Новая система скидок в Language2GO: успейте забрать максимум!
          </h3>
          <span className={css.date}>05-06-2022</span>
          <p className={css.description}>
            Для многих стоимость изучения иностранного языка является важным
            критерием при выборе системы обучения.{" "}
          </p>
          <div className={css.more}>
            <div className={css.type}>Новость</div>
            <div className={css.link}>
              <a href="url">Подробнее</a>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className={css.item}>
          <h3 className={css.name}>
            Новая система скидок в Language2GO: успейте забрать максимум!
          </h3>
          <span className={css.date}>05-06-2022</span>
          <p className={css.description}>
            Для многих стоимость изучения иностранного языка является важным
            критерием при выборе системы обучения.{" "}
          </p>
          <div className={css.more}>
            <div className={css.type}>Новость</div>
            <div className={css.link}>
              <a href="url">Подробнее</a>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className={css.item}>
          <h3 className={css.name}>
            Новая система скидок в Language2GO: успейте забрать максимум!
          </h3>
          <span className={css.date}>05-06-2022</span>
          <p className={css.description}>
            Для многих стоимость изучения иностранного языка является важным
            критерием при выборе системы обучения.{" "}
          </p>
          <div className={css.more}>
            <div className={css.type}>Новость</div>
            <div className={css.link}>
              <a href="url">Подробнее</a>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialNews;
