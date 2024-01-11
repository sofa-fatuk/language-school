import React, { useState } from "react";
import { Header } from "../../components/Header";
import FilterItem from "../../components/FilterItem";
// import BreadCrumbs from "../../components/BreadCrumbs";
import css from "./style.module.scss";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Footer from "../../components/Footer";

const languages = [
  {
    id: "1",
    name: "Все",
  },
  {
    id: "2",
    name: "Китайский",
  },
  {
    id: "3",
    name: "Английский",
  },
  {
    id: "4",
    name: "Немецкий",
  },
  {
    id: "5",
    name: "Испанский",
  },
];

const cards = [
  {
    img: "/img/flags/german.svg",
    title: "Немецкий для начального уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 514,
    color: "#D5E9F6",

    // link: "",
  },
  {
    img: "/img/flags/spain.svg",
    title: "Испанский для среднего уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 514,
    color: "#FDEDE4",

    // link: "",
  },
  {
    img: "/img/flags/china.svg",
    title: "Китайский для среднего уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 514,
    color: "#EFEFFF",

    // link: "",
  },
];

const Courses = () => {
  const checkboxLevel = ["Начальный", "Средний", "Высокий"];
  const checkboxPurposes = [
    "Школа",
    "Студенты",
    "Эмигрантам",
    "Общение",
    "Бизнес и работа",
    "Путешествие",
  ];

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [choose, setChoose] = useState(
    Object.fromEntries(checkboxLevel.map((title) => [title, false]))
  );

  const onCheck = (title: string) => {
    setChoose((prevStates) => ({
      ...prevStates,
      [title]: !prevStates[title],
    }));
  };

  // const onClickFilter = (ids: string[] | null, toggleAll: boolean) => {
  //   setActiveFilters(
  //     toggleAll
  //       ? activeFilters.length === languages.length
  //         ? []
  //         : languages.map((language) => language.id)
  //       : ids || []
  //   );
  // };

  const onClickFilter = (ids: string[] | null, toggleAll: boolean) => {
    setActiveFilters((prevFilters) => {
      return toggleAll
        ? prevFilters.length === languages.length
          ? []
          : languages.map((language) => language.id)
        : ids || [];
    });
    console.log(activeFilters);
  };

  return (
    <>
      <Header />
      {/* <BreadCrumbs /> */}
      <div className={css.layout}>
        <h2 className={css.title}>Курсы</h2>
        <div className={css.filters}>
          {languages.map((language) => (
            <FilterItem
              key={language.id}
              language={language}
              active={activeFilters.includes(language.id)}
              onClick={onClickFilter}
            />
          ))}
        </div>
        <div className={css.courses}>
          <div className={css.cards}>
            {cards.map((card) => (
              <Card
                img={card.img}
                title={card.title}
                hours={card.hours}
                modules={card.modules}
                price={card.price}
                width={card.width}
                color={card.color}
              />
            ))}
          </div>
          <div className={css.morefilters}>
            <div className={css.level}>
              <span className={css.name}>Уровень</span>
              <div className={css.checkList}>
                {checkboxLevel.map((title) => (
                  <Checkbox
                    key={title}
                    value={choose[title]}
                    onChange={() => onCheck(title)}
                    title={title}
                  />
                ))}
              </div>
            </div>
            <div className={css.purposes}>
              <span className={css.name}>Для каких целей</span>
              <div className={css.checkList}>
                {checkboxPurposes.map((title) => (
                  <Checkbox
                    key={title}
                    value={choose[title]}
                    onChange={() => onCheck(title)}
                    title={title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
