import React from "react";
import css from "./style.module.scss";
import LinkButton from "../LinkButton";
import Logo from "../Svgs/Logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.headerGroup}>
          <Link className={css.logo} to="/">
            <Logo fill={"#040404"} />
          </Link>
          <div className={css.options}>
            <Link to="/courses" className={css.link}>
              Курсы
            </Link>
            <Link to="/about" className={css.link}>
              О нас
            </Link>
            <Link to="/blog" className={css.link}>
              Блог
            </Link>
            <Link to="/" className={css.link}>
              Еще
            </Link>
          </div>
        </div>
        <LinkButton
          link="/sign-up"
          value="Войти"
          type="submit"
          style="primary"
        />
      </div>
    </div>
  );
};
