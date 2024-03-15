import React from "react";
import { Header } from "../../components/Header";

import css from "./style.module.scss";
import cn from "classnames";
import RegistrationBlock from "../../components/RegistrationBlock";
import Footer from "../../components/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";

const About = () => {
  return (
    <>
      <Header />
      <div className={css.layout}>
        <BreadCrumbs
          items={[
            { path: "/", breadcrumb: "Главная" },
            { path: "/blog", breadcrumb: "О нас" },
          ]}
        />
        <h2 className={css.title}>О нас</h2>
        <p className={css.subtitle}>Говори легко - живи свободно!</p>
        <div className={css.blockInformation}>
          <div className={css.info}>
            <div className={css.text}>
              <h3 className={css.aboutTitle}>
                Language2GO - интерактивная онлайн-школа иностранных языков
              </h3>
              <p className={css.description}>
                Это новая, полностью автоматизированная платформа, которая
                поможет вам прокачать язык для работы, учебы или общения.
              </p>
              <p className={css.description}>
                Наша система позволит вам в динамичной игровой форме овладеть
                иностранным языком, свободно мыслить и говорить, строить
                предложения, поддерживать разговор в любом обществе и в любой
                жизненной ситуации.
              </p>
            </div>
            <img src="./img/about1.png" alt="" />
          </div>
          <div className={cn(css.info, css.center)}>
            {/* правка, уточнить по работе с двумя классами */}
            <img src="./img/about2.png" alt="" />

            <div className={css.text}>
              <h3 className={css.aboutTitle}>
                Для тех, кто сам хочет строить свою жизнь и стремится к мечте!
              </h3>
              <p className={css.description}>
                Наша школа подойдет для школьников и студентов, бизнесменов и
                путешественников, амбициозных предпринимателей и находчивых
                эмигрантов. Мы дадим вам основы и прочные знания иностранных
                языков за короткое время и в удобном месте.
              </p>
            </div>
          </div>
          <div className={css.info}>
            <div className={css.text}>
              <h3 className={css.aboutTitle}>
                Language2GO отличается от классических курсов изучения языка
              </h3>
              <p>
                Это понятная, нескучная и полностью интерактивная система! Вы
                сами выбираете где, как и сколько заниматься. Она подойдет всем,
                кто хочет за короткий срок качественно изменить свою жизнь,
                всем, кто готов искать новые возможности с новым языком!
              </p>
            </div>
            <img src="./img/about3.png" alt="" />
          </div>
        </div>
        <div className={css.teachers}>
          <h2 className={css.title}>
            Курсы создали профессиональные филологи и педагоги
          </h2>
          <p className={css.subtitle}>
            носители языка, преподаватели зарубежных университетов, которые
            много лет работают в том числе и в России, владеют методиками
            преподавания своего языка, как иностранного и прекрасно знают нюансы
            преподавания именно в русскоязычной среде.
          </p>
          <div className={css.teachersInfo}>
            <div className={css.teacher}>
              <img src="/" className={css.avatar} alt="" />
              <p className={css.name}>Давид Аветисян</p>
              <p className={css.position}>Преподаватель армянского</p>
            </div>
            <div className={css.teacher}>
              <img src="/" className={css.avatar} alt="" />
              <p className={css.name}>Софья Павловна</p>
              <p className={css.position}>Преподаватель русского</p>
            </div>
            <div className={css.teacher}>
              <img src="/" className={css.avatar} alt="" />
              <p className={css.name}>Джон Смит</p>
              <p className={css.position}>Преподаватель английского</p>
            </div>
            <div className={css.teacher}>
              <img src="/" className={css.avatar} alt="" />
              <p className={css.name}>Михаил Шнейдер</p>
              <p className={css.position}>Преподаватель немецкого</p>
            </div>
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

export default About;
