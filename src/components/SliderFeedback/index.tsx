import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import FeedbackCard from "../FeedbackCard";
import { getFeedbacks } from "../../api/feedbacks";
import SwiperCore from "swiper";
import SwiperInstance from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import css from "./style.module.scss";

SwiperCore.use([]);

const SliderFeedback = () => {
  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getFeedbacks,
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
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        loop
        className="mySwiper"
      >
        {feedbacks.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={css.item}>
              <FeedbackCard
                name={item.name}
                feedback={item.description}
                color={item.color}
                stars={item.stars}
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
            activeIndex === feedbacks.length - 1 ? css.active : ""
          }`}
          onClick={onClickNext}
        ></button>
      </div>
    </div>
  );
};

export default SliderFeedback;
