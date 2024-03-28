import React, { useState } from "react";
import { Header } from "../../components/Header";
import FilterItem from "../../components/FilterItem";
import css from "./style.module.scss";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Footer from "../../components/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";

import { getCourses } from "../../api/courses";
import { useQuery } from "@tanstack/react-query";
import PaginatedItems from "../../components/PaginatedItems";

const filters = [
  {
    name: "Все",
  },
  {
    name: "Китайский",
  },
  {
    name: "Английский",
  },
  {
    name: "Немецкий",
  },
  {
    name: "Испанский",
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

  const [activeFilters, setActiveFilters] = useState<number[]>([]);

  const [choose, setChoose] = useState(
    Object.fromEntries(checkboxLevel.map((title) => [title, false]))
  );

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const renderItem = (item: any) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        hours={item.hours}
        modules={item.modules}
        price={item.price}
        width={item.width}
        color={item.color}
        link={`/courses/${item.id}`} //правка
      />
    );
  };

  const onCheck = (title: string) => {
    setChoose((prevStates) => ({
      ...prevStates,
      [title]: !prevStates[title],
    }));
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
            { path: "/courses", breadcrumb: "Курсы" },
          ]}
        />
        <h2 className={css.title}>Курсы</h2>
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
        <div className={css.courses}>
          <div className={css.cards}>
            <PaginatedItems renderItem={renderItem} items={courses} />
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
