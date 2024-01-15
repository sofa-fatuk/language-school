import React from "react";
import css from "./style.module.scss";
import { Header } from "../../components/Header";
import PurpleButton from "../../components/PurpleButton";
import WhiteButton from "../../components/WhiteButton ";
import SliderCards from "../../components/SliderCards";
import PresentationIcon from "../../components/Svgs/PresentationIcon";
import MapMarkerIcon from "../../components/Svgs/MapMarkerIcon";
import CommentIcon from "../../components/Svgs/CommentIcon";
import CapIcon from "../../components/Svgs/CapIcon";
import BriefcaseIcon from "../../components/Svgs/BriefcaseIcon";
import ShipIcon from "../../components/Svgs/ShipIcon";
import FeedbackCard from "../../components/FeedbackCard";
import RegistrationBlock from "../../components/RegistrationBlock";
import CollapsiblePanel from "../../components/CollapsiblePanel";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";

const news = [
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Новость",
    link: "/",
  },
  {
    title:
      "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Новость",
    link: "/",
  },
  {
    title:
      "Новое слово в изучении иностранных языков: интерактивная платформа ...",
    date: "05-06-2022",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
    type: "Новость",
    link: "/",
  },
];

const MainPage = () => {
  return (
    <>
      <Header />
      <div className={css.layout}>
        <div className={css.info}>
          <div className={css.name}>
            <span className={css.subtitle}>Language to go</span>
            <h1 className={css.title}>
              Онлайн-школа <br /> иностранных языков
            </h1>
            <span className={css.text}>
              Достигайте своих целей с помощью авторских игровых методик от
              носителей языка
            </span>
            <div className={css.block}>
              <PurpleButton value="Попробовать бесплатно" />
              <div className={css.watchVideo}>
                <img src="img/button-play.svg" alt="" />
                <span>Посмотреть промо-ролик</span>
              </div>
            </div>
          </div>
          <img src="img/man-with-coffee.png" alt="" />
        </div>
        <div className={css.courses}>
          <div className={css.container}>
            <h2 className={css.title}>
              Курсы иностранных языков <br /> для любого уровня
            </h2>
            <WhiteButton value="Все курсы" />
          </div>
          <div className={css.cards}>
            <SliderCards />
          </div>
        </div>
        <div className={css.informationBlock}>
          <div className={css.name}>
            <h2 className={css.title}>Кому подойдет</h2>
            <h2 className={css.nameSchool}>L2GO</h2>
            <p className={css.description}>
              <span style={{ color: "#2E90D1" }}>Language to go </span>
              подойдет всем, кто хочет за короткий срок качественно изменить
              свою жизнь, освоив иностранный язык.
            </p>
            <PurpleButton value="Попробовать бесплатно" />
          </div>
          <div className={css.innerData}>
            <div className={css.data}>
              <div className={css.datablock}>
                <PresentationIcon />
                <span className={css.title}>Школьникам</span>
                <p className={css.text}>
                  Сдать выпускные экзамены или поступить в ВУЗ.
                </p>
              </div>
            </div>
            <div className={css.data}>
              <div className={css.datablock}>
                <CapIcon />
                <span className={css.title}>Студентам</span>
                <p className={css.text}>
                  Переехать на обучение в другую страну или найти
                  высокооплачеваемую работу
                </p>
              </div>
            </div>
            <div className={css.data}>
              <div className={css.datablock}>
                <MapMarkerIcon />
                <span className={css.title}>Эмигрантам</span>
                <p className={css.text}>
                  Адаптироваться в новой стране, создать конкурентное
                  преимущество и трудоустроиться
                </p>
              </div>
            </div>
            <div className={css.data}>
              <div className={css.datablock}>
                <CommentIcon />
                <span className={css.title}>Общительным</span>
                <p className={css.text}>
                  Создать счастливую семью с иностранцем и интегрироваться
                  в новое общество
                </p>
              </div>
            </div>
            <div className={css.data}>
              <div className={css.datablock}>
                <BriefcaseIcon />
                <span className={css.title}>Бизнесменам</span>
                <p className={css.text}>
                  Завести полезные знакомства среди иностранцев и масштабировать
                  бизнес
                </p>
              </div>
            </div>
            <div className={css.data}>
              <div className={css.datablock}>
                <ShipIcon />
                <span className={css.title}>Путешественникам</span>
                <p className={css.text}>
                  Свободно общаться и находить новых друзей, решать бытовые
                  вопросы и спорные ситуации
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.reasons}>
          <h2 className={css.title}>Почему вы быстро освоите язык</h2>
          <div className={css.reasonsBlock}>
            <div className={css.information}>
              <span className={css.number} style={{ background: "#2E90D1" }}>
                01
              </span>
              <span className={css.name}>Интересные уроки</span>
              <p className={css.description}>
                Короткие, но насыщенные уроки до 45 минут.
              </p>{" "}
              <br />
              <p className={css.description}>
                Более глубокий объем знаний, чем в других школах и даже чем
                предусмотрено международными стандартами.
              </p>
            </div>
            <img src="img/couple.png" alt="" className={css.image} />
          </div>
          <div className={css.reasonsBlock}>
            <img src="img/feedbacks.png" alt="" />
            <div className={css.information}>
              <span className={css.number} style={{ background: "#78258D" }}>
                02
              </span>
              <span className={css.name}>Общение с другими учащимися</span>
              <p className={css.description}>
                Внутренний видеочат для общения с единомышленниками и отработки
                материала. Завести новых друзей по интересам просто.
              </p>
            </div>
          </div>
          <div className={css.reasonsBlock}>
            <div className={css.information}>
              <span className={css.number} style={{ background: "#E42125" }}>
                03
              </span>
              <span className={css.name}>Удобный формат обучения</span>
              <p className={css.description}>
                Полностью автоматический процесс обучения на одной платформе с
                доступом на любом устройстве.
              </p>
            </div>
            <img src="img/task-bord.png" alt="" />
          </div>
        </div>
        <div className={css.methodology}>
          <div className={css.aboutMethodology}>
            <h2 className={css.title}>
              Эффективная методика изучения языка
              <span className={css.logoColor}> L2GO</span>
            </h2>
            <ul className={css.list}>
              <li className={css.description}>
                Самостоятельно выбираете удобный режим и время прохождения
                заданий
              </li>
              <li className={css.description}>
                Cовременная эффективная методика обучения гарантирует освоение
                языка на максимально высоком уровне за короткий срок
              </li>
              <li className={css.description}>
                Полная автоматизация позволяет нам предоставлять самую низку
                цену - в 2, 3, а то и в 5 раз дешевле других языковых школ.
              </li>
            </ul>
          </div>
        </div>
        <div className={css.feedbacks}>
          <div className={css.container}>
            <h2 className={css.title}>
              Что говорят о нас <br /> ученики?
            </h2>
            <WhiteButton value="Все отзывы" />
          </div>
          <div className={css.feedbacksBlock}>
            <img src="/img/feedback-man.png" alt="" />
            <div className={css.innerFeedback}>
              <FeedbackCard />
            </div>
          </div>
        </div>
        <RegistrationBlock />
        <div className={css.blockNews}>
          <div className={css.container}>
            <h2 className={css.title}>Полезные новости и статьи</h2>
            <WhiteButton value="Все новости" />
          </div>
          <div className={css.news}>
            {news.map((item) => (
              <NewsCard
                title={item.title}
                date={item.date}
                description={item.description}
                type={item.type}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div className={css.questionsBlock}>
          <div className={css.name}>
            <h2 className={css.title}>Отвечаем на частые вопросы</h2>
            <div className={css.button}>
              <PurpleButton value="Задать вопрос" />
            </div>
            <img src="img/casual-woman.png" alt="" />
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
