import React, { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";
import cn from "classnames";

interface IProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  link?: string;
  value?: string;
  style?: string;
}

function LinkButton({ link = "/", ...buttonProps }: IProps) {
  return (
    <Link to={link} className={css.buttonLink}>
      <Button {...buttonProps} />
    </Link>
  );
}

function Button({ value, style }: IProps) {
  return (
    <button
      className={cn(
        style === "primary" ? css.primaryButton : css.secondaryButton
      )}
    >
      {value}
    </button>
  );
}

// TODO: Primary and Secondary
//правка style="primary" ругается на то что это не объект, везде исправить

export default LinkButton;
