import React from "react";
import css from "./style.module.scss";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const cards = [
  {
    img: "/img/flags/german.svg",
    title: "Немецкий для начального уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 453,
    color: "#D5E9F6",
    link: "/courses/course-page",
  },
  {
    img: "/img/flags/spain.svg",
    title: "Испанский для среднего уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 453,
    color: "#FDEDE4",
    link: "/courses/course-page",
  },
  {
    img: "/img/flags/china.svg",
    title: "Китайский для среднего уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 453,
    color: "#EFEFFF",
    link: "/courses/course-page",
  },
  {
    img: "/img/flags/german.svg",
    title: "Немецкий для начального уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 453,
    color: "#D5E9F6",
    link: "/courses/course-page",
  },
  {
    img: "/img/flags/spain.svg",
    title: "Испанский для среднего уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 453,
    color: "#FDEDE4",
    link: "/courses/course-page",
  },
  {
    img: "/img/flags/china.svg",
    title: "Китайский для среднего уровня",
    hours: 45,
    modules: 3,
    price: 6520,
    width: 453,
    color: "#EFEFFF",
    link: "/courses/course-page",
  },
];

const SliderCards = () => {
  return (
    <div className={css.cads}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide>
            <Card
              img={card.img}
              title={card.title}
              hours={card.hours}
              modules={card.modules}
              price={card.price}
              width={card.width}
              color={card.color}
              link={card.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCards;
