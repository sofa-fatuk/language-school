import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";

interface IProps {
  link: string;
  value: string;
  Icon?: React.ReactNode;
}

function SocialButton({ value, Icon, link }: IProps) {
  return (
    <>
      <Link to={link}>
        <button className={css.button}>
          {Icon}
          {value}
        </button>
      </Link>
    </>
  );
}

export default SocialButton;
