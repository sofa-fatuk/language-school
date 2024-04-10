function random(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function randomDate() {
  const year = Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000;

  const month = Math.floor(Math.random() * 12);

  const day =
    Math.floor(Math.random() * new Date(year, month + 1, 0).getDate()) + 1;

  const formattedMonth = (month + 1).toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");

  return `${formattedMonth}-${formattedDay}-${year}`;
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

const articles = [
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
    type: "Новость",
  },
  {
    title: "Новая система скидок в Language2GO: успейте забрать максимум!",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
    type: "Статья",
  },
  {
    title:
      "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
    description:
      "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
    type: "Интересное",
  },
];

const levels = ["начального", "среднего", "продвинутого"];
const colors = ["#D5E9F6", "#FDEDE4", "#EFEFFF"];

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

function getArticle(id) {
  const article = articles[random(0, articles.length)];
  return {
    id,
    title: article.title,
    date: randomDate,
    description: article.description,
    type: article.type,
  };
}

module.exports = () => ({
  courses: Array.from({ length: 1000 }, (_, i) => getCourse(i)),
  coursesForSlider: [
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
  similarCourses: [
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
  ],
  news: Array.from({ length: 1000 }, (_, i) => getArticle(i)),
  newsRecommended: [
    {
      id: 1,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Новость",
      link: "/news/blog-page",
    },
    {
      id: 2,
      title: "Новая система скидок в Language2GO: успейте забрать максимум!",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Статья",
      link: "/news/blog-page",
    },
    {
      id: 3,
      title:
        "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
      date: "05-06-2022",
      description:
        "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения.",
      type: "Интересное",
      link: "/news/blog-page",
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
