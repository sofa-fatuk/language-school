import React from "react";
import css from "./style.module.scss";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/courses";

// const cards = [
//   {
//     img: "/img/flags/german.svg",
//     title: "Немецкий для начального уровня",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 453,
//     color: "#D5E9F6",
//     link: "/courses/course-page",
//   },
//   {
//     img: "/img/flags/spain.svg",
//     title: "Испанский для среднего уровня",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 453,
//     color: "#FDEDE4",
//     link: "/courses/course-page",
//   },
//   {
//     img: "/img/flags/china.svg",
//     title: "Китайский для среднего уровня",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 453,
//     color: "#EFEFFF",
//     link: "/courses/course-page",
//   },
//   {
//     img: "/img/flags/german.svg",
//     title: "Немецкий для начального уровня",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 453,
//     color: "#D5E9F6",
//     link: "/courses/course-page",
//   },
//   {
//     img: "/img/flags/spain.svg",
//     title: "Испанский для среднего уровня",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 453,
//     color: "#FDEDE4",
//     link: "/courses/course-page",
//   },
//   {
//     img: "/img/flags/china.svg",
//     title: "Китайский для среднего уровня",
//     hours: 45,
//     modules: 3,
//     price: 6520,
//     width: 453,
//     color: "#EFEFFF",
//     link: "/courses/course-page",
//   },
// ];

const SliderCards = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return (
    <div className={css.cards}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {courses.map((item) => (
          <SwiperSlide>
            <div className={css.item}>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCards;
