import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../../../components/Header";
import { getFeedbacks } from "../../../api/feedbacks";
import { getCourse, getSimilarCourses } from "../../../api/courses";
import ModuleItem from "../../../components/ModuleItem";
import LinkButton from "../../../components/LinkButton";
import FeedbackCard from "../../../components/FeedbackCard";
import Card from "../../../components/Card";
import CardPrice from "../../../components/CardPrice";
import RegistrationBlock from "../../../components/RegistrationBlock";
import Footer from "../../../components/Footer";
import TopStudents from "../../../components/TopStudents";
import BreadCrumbs from "../../../components/BreadCrumbs";
import useWindowSize from "../../../hooks/useWindowSize";

import FacebookIcon from "../../../components/Svgs/FacebookIcon";
import YouTubeIcon from "../../../components/Svgs/YouTubeIcon";
import VkIcon from "../../../components/Svgs/VkIcon";
import TwitIcon from "../../../components/Svgs/TwitIcon";

import css from "./style.module.scss";

const modules = [
  {
    title: "Модуль 1:",
    topic: "Über mich / О себе",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 2:",
    topic: "Familie / Семья",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 3:",
    topic: "Mein Tagesablauf / Мой день",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 4:",
    topic: "Zahlen / Числа",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 5:",
    topic: "Gesprächssituationen / Разговорные ситуации",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 6:",
    topic: "Freizeitgestaltung / Досуг",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 7:",
    topic: "Berufsleben / Профессиональная жизнь",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
  {
    title: "Модуль 8:",
    topic: "Feiertage / Праздники ",
    lessons: "5 уроков / 50 баллов",
    description:
      "Сложно сказать, почему представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Противоположная точка зрения подразумевает, что непосредственные участники технического прогресса, инициированные исключительно синтетически, ограничены исключительно образом мышления",
  },
];

// const similarCourses = [
//   {
//     img: "/img/flags/german.svg",
//     language: "немецкий",
//     level: "начального",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 458,
//     color: "#D5E9F6",
//     link: "/courses/course-page",
//   },
//   {
//     img: "/img/flags/spain.svg",
//     language: "испанский",
//     level: "начального",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 458,
//     color: "#FDEDE4",
//     link: "/courses/course-page",
//   },
// ];

interface CoursePageProps {
  id: string;
}

const CoursePage = ({ id }: CoursePageProps) => {
  const size = useWindowSize();

  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getFeedbacks,
  });

  const { data: course, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: getCourse,
  });

  const { data: similarCourses = [] } = useQuery({
    queryKey: ["similarCourses"],
    queryFn: getSimilarCourses,
  });

  if (isLoading) {
    return null;
  }

  if (!course) {
    return <div>Такого продукта нет</div>;
  }

  const {
    language,
    level,
    img,
    price,
    lessons,
    tasks,
    tests,
    expertHours,
    color,
  } = course;

  return (
    <>
      <Header />
      <div className={css.layout}>
        <BreadCrumbs
          items={[
            { path: "/", breadcrumb: "Главная" },
            { path: "/courses", breadcrumb: "Курсы" },
            { path: "/courses/course-page", breadcrumb: "Курс подробно" }, //правка id
          ]}
        />
        <div className={css.coursItem}>
          <div className={css.infoBlock}>
            <div className={css.wrapper}>
              <h2 className={css.name}>
                {language} <br /> для {level} уровня
              </h2>
              <h3 className={css.title}>О курсе</h3>
              <div className={css.list}>
                <span className={css.listTitle}>После прохождения курса:</span>
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
            <div className={css.wrapper}>
              <h3 className={css.title}>Программа курса</h3>
              <div className={css.modules}>
                {modules.map((module) => (
                  <ModuleItem
                    title={module.title}
                    topic={module.topic}
                    lessons={module.lessons}
                    description={module.description}
                  />
                ))}
              </div>
            </div>
            <div className={css.wrapper}>
              <h3 className={css.title}>Как проходит обучение</h3>
              <div className={css.formatBlock}>
                <div className={css.card}>
                  <img src="../img/format1.png" alt="" />
                  <span className={css.description}>
                    Онлайн-платформа <br /> для обучения и выполнения заданий
                  </span>
                </div>
                <div className={css.card}>
                  <img src="../img/format2.png" alt="" />
                  <span className={css.description}>
                    Полностью <br /> интерактивный формат
                    <p>(3D-учитель расскажет вам весь материал)</p>
                  </span>
                </div>
                <div className={css.card}>
                  <img src="../img/format3.png" alt="" />
                  <span className={css.description}>
                    Видео чат для общения <br /> с сокурсниками
                  </span>
                </div>
              </div>
            </div>
            <div className={css.wrapper}>
              <div className={css.container}>
                <h3 className={css.title}>Отзывы о курсе</h3>
                <LinkButton value="Все отзывы" />
              </div>
              <div className={css.feedbacks}>
                {feedbacks.map((item) => (
                  <FeedbackCard
                    name={item.name}
                    feedback={item.description}
                    color={item.color}
                    stars={item.stars}
                  />
                ))}
              </div>
            </div>
            <div className={css.wrapper}>
              <h3 className={css.title}>Похожие курсы</h3>
              <div className={css.similarCourses}>
                {similarCourses.map((card) => (
                  <Card item={card} width={514} link={`/courses/${card.id}`} />
                ))}
              </div>
            </div>
          </div>
          <div className={css.moreInformation}>
            <CardPrice
              img={img}
              price={price}
              lessons={lessons}
              tasks={tasks}
              tests={tests}
              expertHours={expertHours}
              color={color}
            />
            {/* {size.width > 1000 ? ( */}
            <div className={css.rating}>
              <TopStudents />
            </div>
            {/* ) : null} */}
          </div>
        </div>
        <div className={css.registration}>
          <RegistrationBlock />
        </div>
      </div>
      <Footer />
    </>
  );
};

const Wrapper = () => {
  const params = useParams();
  if (!params.id) {
    return null;
  }
  return <CoursePage id={params.id} />;
};

export default Wrapper;
