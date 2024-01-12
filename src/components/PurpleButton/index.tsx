import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import css from "./style.module.scss";

interface Iprops
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function PurpleButton(props: Iprops) {
  const { value, onClick, type } = props;

  return (
    <button className={css.button} type={type} onClick={onClick}>
      {value}
    </button>
  );
}

export default PurpleButton;
