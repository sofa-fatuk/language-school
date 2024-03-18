import React, { useRef, useState } from "react";
import css from "./style.module.scss";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import SwiperInstance from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/courses";

SwiperCore.use([]);

const SliderCards = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  const swiper = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateActiveIndex = () => {
    if (swiper.current) {
      setActiveIndex(swiper.current.realIndex);
    }
  };

  const onClickPrev = () => {
    swiper.current?.slidePrev();
    updateActiveIndex();
  };

  const onClickNext = () => {
    swiper.current?.slideNext();
    updateActiveIndex();
  };

  return (
    <div className={css.cards}>
      <Swiper
        onSwiper={(instance: SwiperInstance | null) => {
          if (instance) {
            swiper.current = instance;
            updateActiveIndex();
          }
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        loop
        className="mySwiper"
      >
        {courses.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={css.item}>
              <Card
                img={item.img}
                title={item.title}
                hours={item.hours}
                modules={item.modules}
                price={item.price}
                width={item.width}
                color={item.color}
                link={`/courses/${item.id}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={css.arrows}>
        <button
          className={`${css.prev} ${activeIndex === 0 ? css.active : ""}`}
          onClick={onClickPrev}
        ></button>
        <button
          className={`${css.next} ${
            activeIndex === courses.length - 3 ? css.active : ""
          }`}
          onClick={onClickNext}
        ></button>
      </div>
    </div>
  );
};

export default SliderCards;
