import React from "react";
import css from "./style.module.scss";
import PurpleButton from "../PurpleButton";

export const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.headerGroup}>
          <div className={css.logo}>
            <img src="img/logo.svg" alt="" />
          </div>
          <div className={css.options}>
            <li>Курсы</li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Еще</li>
          </div>
        </div>
        <PurpleButton value="Войти" type="submit" />
      </div>
    </div>
  );
};
