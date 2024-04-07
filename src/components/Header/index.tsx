import React, { useState } from "react";
import css from "./style.module.scss";
import LinkButton from "../LinkButton";
import Logo from "../Svgs/Logo";
import { Link } from "react-router-dom";
import { Popover } from "react-tiny-popover";

export const Header = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

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
            <div className={css.link}>
              <Popover
                isOpen={isPopoverOpen}
                positions={["top", "bottom", "left", "right"]}
                containerStyle={{
                  backgroundColor: "#FFF",
                }}
                content={
                  <ul className={css.list}>
                    <Link className={css.item} to="/questions">
                      FAQ
                    </Link>
                    <Link className={css.item} to="/">
                      Контакты
                    </Link>
                    <Link className={css.item} to="/">
                      Условия оплаты
                    </Link>
                  </ul>
                }
              >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Еще</div>
              </Popover>
            </div>
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
