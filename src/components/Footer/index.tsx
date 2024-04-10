import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "../Svgs/FacebookIcon";
import YouTubeIcon from "../Svgs/YouTubeIcon";
import VkIcon from "../Svgs/VkIcon";
import TwitIcon from "../Svgs/TwitIcon";
import Logo from "../Svgs/Logo";

import css from "./style.module.scss";

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.footer}>
        <div className={css.logoWrapper}>
          <Logo fill={"#fff"} />
          <span className={css.text}>
            Language2Go — интерактивная платформа для легкого, удобного и
            быстрого изучения иностранных языков.
          </span>
        </div>
        <div className={css.listColumns}>
          <ul className={css.list}>
            <li className={css.title}>Обучение</li>
            <li className={css.item}>
              <Link to="/courses">Все языки</Link>
            </li>
            <li className={css.item}>Взрослым</li>
            <li className={css.item}>Детям и подросткам</li>
            <li className={css.item}>Мини-курсы</li>
            <li className={css.item}>Тренажеры</li>
            <li className={css.item}>Индивидуальные занятия</li>
          </ul>
        </div>
        <div className={css.listColumns}>
          <ul className={css.list}>
            <li className={css.title}>Информация</li>
            <li className={css.item}>
              <Link to="/about">О нас</Link>
            </li>
            <li className={css.item}>Отзывы</li>
            <li className={css.item}>
              <Link to="/news">Новости</Link>
            </li>
            <li className={css.item}>
              <Link to="/questions">Частые вопросы</Link>
            </li>
            <li className={css.item}>Условия оплаты</li>
            <li className={css.item}>Контакты</li>
          </ul>
        </div>
        <div className={css.contacts}>
          <span className={css.title}>Контакты</span>
          <span className={css.number}>+7 (495) 156-35-50</span>
          <span className={css.text}>
            info@language2go.ru support@language2go.ru
          </span>
          <span className={css.text}>101000, Москва, Россия</span>
          <div className={css.socials}>
            <FacebookIcon fill="#FEFFFF" />
            <YouTubeIcon fill="#FEFFFF" />
            <VkIcon fill="#FEFFFF" />
            <TwitIcon fill="#FEFFFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
