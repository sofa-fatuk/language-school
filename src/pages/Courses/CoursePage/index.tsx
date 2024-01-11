import React from "react";
import css from "./style.module.scss";
import { Header } from "../../../components/Header";
import FacebookIcon from "../../../components/Svgs/FacebookIcon";
import YouTubeIcon from "../../../components/Svgs/YouTubeIcon";
import VkIcon from "../../../components/Svgs/VkIcon";
import TwitIcon from "../../../components/Svgs/TwitIcon";
import ModuleItem from "../../../components/ModuleItem";

const CoursePage = () => {
  return (
    <>
      <Header />
      <div className={css.layout}>
        <div className={css.coursItem}>
          <div className={css.infoBlock}>
            <h2 className={css.name}>Немецкий для начинающих</h2>
            <h3 className={css.title}>О курсе</h3>
            <div className={css.list}>
              <div className={css.listTitle}>
                <li className={css.item}>
                  - легко расскажете о себе, представите свою компанию
                </li>
                <li className={css.item}>
                  - сможете поддержать беседу и без труда ориентироваться в
                  бытовых ситуациях,
                </li>
                <li className={css.item}>
                  - легко знакомиться и общаться с окружающими.
                </li>
                <li className={css.item}>
                  - Вы никогда не потеряетесь в языковой среде!
                </li>
              </div>
            </div>
            <div className={css.subscription}>
              <div className={css.level}>Для начинающих</div>
              <div className={css.socials}>
                <p className={css.text}>Поделиться:</p>
                <div className={css.socialsBlock}>
                  <FacebookIcon fill="#78258D" />
                  <YouTubeIcon fill="#78258D" />
                  <VkIcon fill="#78258D" />
                  <TwitIcon fill="#78258D" />
                </div>
              </div>
            </div>
            <div></div>
            <h3 className={css.title}>Программа курса</h3>
            <div className={css.modules}>
              <ModuleItem
                title="Модуль 2: Familie / Семья "
                lessons="5 уроков / 50 баллов"
                description="Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления"
              />
            </div>
          </div>
          <div className={css.moreInformation}>
            <div className={css.prise}></div>
            <div className={css.rating}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
