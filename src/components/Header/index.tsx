import React from "react";
import css from "./style.module.scss";
import PurpleButton from "../PurpleButton";
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
            <li>
              <Link to="/courses">Курсы</Link>
            </li>
            <li>О нас</li>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>Еще</li>
          </div>
        </div>
        <PurpleButton value="Войти" type="submit" />
      </div>
    </div>
  );
};
