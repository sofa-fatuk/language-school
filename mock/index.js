function random(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
const languages = [
  {
    title: "немецкий",
    img: "/img/flags/german.svg",
  },
  {
    title: "испанский",
    img: "/img/flags/spain.svg",
  },
  {
    title: "китайский",
    img: "/img/flags/china.svg",
  },
];
const levels = ["начального", "среднего", "продвинутого"];
const colors = ["#D5E9F6", "#FDEDE4", "#EFEFFF"];
// const type = ["Новость", "Интересное", "Статья"];

function getCourse(id) {
  const language = languages[random(0, languages.length)];
  const level = levels[random(0, levels.length)];
  const color = colors[random(0, levels.length)];
  return {
    id,
    img: language.img,
    hours: random(10, 300),
    modules: random(3, 15),
    price: random(6250, 52392),
    language: language.title,
    level,
    color: `${color}`,
    lessons: random(10, 50),
    tasks: random(120, 500),
    tests: random(3, 10),
    expertHours: random(3, 10),
  };
}

// function getNews(id) {
//   return {
//     id,
//     title: "Новая система скидок в Language2GO: успейте забрать максимум!",
//     date: "05-06-2022",
//     description:
//         "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
//       type: "Новость",
//       link: "/blog/blog-page",
//   };
// }

module.exports = () => ({
  courses: Array.from({ length: 1000 }, (_, i) => getCourse(i)),
  coursesRecommended: [
    {
      id: 1,
      img: "/img/flags/german.svg",
      language: "Немецкий",
      level: "начального",
      hours: 45,
      modules: 3,
      price: 6520,
      width: 514,
      color: "#D5E9F6",
    },
    {
      id: 2,
      img: "/img/flags/spain.svg",
      language: "Испанский",
      level: "начального",
      hours: 45,
      modules: 3,
      price: 6520,
      width: 514,
      color: "#FDEDE4",
    },
    {
      id: 3,
      img: "/img/flags/china.svg",
      language: "Китайский",
      level: "среднего",
      hours: 45,
      modules: 3,
      price: 6520,
      width: 514,
      color: "#EFEFFF",
    },
    {
      id: 4,
      img: "/img/flags/german.svg",
      language: "Английский",
      level: "начального",
      hours: 45,
      modules: 3,
      price: 6520,
      width: 514,
      color: "#D5E9F6",
    },
    {
      id: 5,
      img: "/img/flags/china.svg",
      language: "Китайский",
      level: "среднего",
      hours: 45,
      modules: 3,
      price: 6520,
      width: 514,
      color: "#EFEFFF",
    },
    {
      id: 6,
      img: "/img/flags/spain.svg",
      language: "Испанский",
      level: "начального",
      hours: 45,
      modules: 3,
      price: 6520,
      width: 514,
      color: "#FDEDE4",
    },
  ],
  news: [
    {
      id: 1,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/blog/blog-page",
    },
    {
      id: 2,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Статья",
      link: "/blog/blog-page",
    },
    {
      id: 3,
      title:
        "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Интересное",
      link: "/blog/blog-page",
    },
    {
      id: 4,
      title:
        "Новое слово в изучении иностранных языков: интерактивная платформа ...",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Статья",
      link: "/",
    },
    {
      id: 5,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/blog/blog-page",
    },
    {
      id: 6,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/blog/blog-page",
    },
    {
      id: 7,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/blog/blog-page",
    },
    {
      id: 8,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/blog/blog-page",
    },
  ],
  newsRecommended: [
    {
      id: 1,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/blog/blog-page",
    },
    {
      id: 2,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Статья",
      link: "/blog/blog-page",
    },
    {
      id: 3,
      title:
        "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Интересное",
      link: "/blog/blog-page",
    },
  ],
  feedbacks: [
    {
      id: 1,
      name: "Артем М.",
      description:
        "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю.",
      color: "#fdede4",
      stars: 4,
    },
    {
      id: 2,
      name: "Мария З.",
      description:
        "Все супер, преподаватели были очень отзывчивые и максимально профессиональны",
      color: "#EFEFFF",
      stars: 3,
    },
    {
      id: 3,
      name: "Сергей Л.",
      description:
        "Занимаюсь в данной школе уже более 2,5 лет. Каждое занятие ждёшь с нетерпением и после них чувствуешь себя обновлённым и с каждым разом всё более и более уверенным в своих навыках. ",
      color: "#fdede4",
      stars: 5,
    },
  ],
  feedbacksRecommended: [
    {
      id: 1,
      name: "Артем М.",
      description:
        "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю.",
      color: "#fdede4",
    },
    {
      id: 2,
      name: "Мария З.",
      description:
        "Все супер, преподаватели были очень отзывчивые и максимально профессиональны",
      color: "#EFEFFF",
    },
  ],
});
