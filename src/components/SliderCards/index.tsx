import React, { useRef, useState } from "react";
import css from "./style.module.scss";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import SwiperInstance from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import { getRecommendedCourses } from "../../api/courses";

SwiperCore.use([]);

const SliderCards = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: getRecommendedCourses,
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
  };

  const onClickNext = () => {
    swiper.current?.slideNext();
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
        onActiveIndexChange={updateActiveIndex}
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
                language={item.language}
                level={item.level}
                hours={item.hours}
                modules={item.modules}
                price={item.price}
                width={453}
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
