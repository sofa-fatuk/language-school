import React, {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import css from "./style.module.scss";

interface Iprops
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function WhiteButton(props: Iprops) {
  const { value, onClick, type, color } = props;

  return (
    <button className={css.button} type={type} onClick={onClick}>
      {value}
    </button>
  );
}

export default WhiteButton;
