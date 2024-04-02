import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import FilterItem from "../../components/FilterItem";
import css from "./style.module.scss";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Footer from "../../components/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";
import { getCourses } from "../../api/courses";
import PaginatedItems from "../../components/PaginatedItems";

const filters = [
  {
    name: "все",
  },
  {
    name: "китайский",
  },
  {
    name: "английский",
  },
  {
    name: "немецкий",
  },
  {
    name: "испанский",
  },
];

interface QueryParams {
  [key: string]: string;
}

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = Object.fromEntries(new URLSearchParams(location.search));
  console.log(location.search);

  const checkboxLevel = ["Начальный", "Средний", "Высокий"];
  const checkboxPurposes = [
    "Школа",
    "Студенты",
    "Эмигрантам",
    "Общение",
    "Бизнес и работа",
    "Путешествие",
  ];

  // const [activeFilters, setActiveFilters] = useState<number[]>([]);

  const [choose, setChoose] = useState(
    Object.fromEntries(checkboxLevel.map((title) => [title, false]))
  );

  //Filter

  const changeQueryParams = (newParams: QueryParams): void => {
    const searchParams = new URLSearchParams(location.search);
    const updatedQuery: QueryParams = {
      ...Object.fromEntries(searchParams),
      ...newParams,
    };

    for (const property in updatedQuery) {
      if (updatedQuery[property] === "") {
        delete updatedQuery[property];
      }
    }

    const queryString = new URLSearchParams(updatedQuery).toString();

    navigate(`/courses?${queryString}`);
  };

  const { data: courses = [] } = useQuery({
    queryKey: ["courses", location.search],
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
        width={514}
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

  const onClickFilter = (index: number) => {
    const name = filters[index].name;

    changeQueryParams({
      language: name === "все" ? "" : name,
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
              active={
                searchParams.language === item.name ||
                searchParams.language === undefined
              }
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
