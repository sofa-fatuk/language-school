import React, { useState } from "react";
import css from "./style.module.scss";
import { Header } from "../../components/Header";
import FilterItem from "../../components/FilterItem";
import CollapsiblePanel from "../../components/CollapsiblePanel";
import Footer from "../../components/Footer";
import PurpleButton from "../../components/PurpleButton";
import BreadCrumbs from "../../components/BreadCrumbs";

const filters = [
  {
    name: "Все",
  },
  {
    name: "Вопросы об обучении",
  },
  {
    name: "Вопросы о покупке",
  },
];

const FAQ = () => {
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

  return (
    <>
      <Header />
      <div className={css.layout}>
        <BreadCrumbs
          items={[
            { path: "/", breadcrumb: "Главная" },
            { path: "/questions", breadcrumb: "FAQ" },
          ]}
        />
        <h2 className={css.title}>FAQ</h2>
        <p className={css.subtitle}>Часто задаваемые вопросы</p>
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
        <div className={css.questions}>
          <CollapsiblePanel
            title="Как проходит обучение на онлайн-курсах?"
            description="Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала."
          />
          <CollapsiblePanel
            title="Я покупаю пакет уроков или онлайн-курс, сколько он действует?"
            description="Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала."
          />
          <CollapsiblePanel
            title="Как быстро я достигну результатов?"
            description="Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала."
          />
          <CollapsiblePanel
            title="Когда я могу начать обучение?"
            description="Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала."
          />
          <CollapsiblePanel
            title="Как проходит обучение на индивидуальных занятиях?"
            description="Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала."
          />
        </div>
        <div className={css.connection}>
          <div className={css.container}>
            <h2 className={css.title}>Мы всегда рады помочь!</h2>
            <p className={css.text}>
              Свяжитесь с нашей командой поддержки <br /> студентов по любым
              вопросам.
            </p>
            <PurpleButton value="Задать вопрос" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
