import React from "react";
import css from "./style.module.scss";
import cn from "classnames";

interface IProps {
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AgreementCheckbox(props: IProps) {
  const { value, onChange } = props;

  return (
    <div className={css.container}>
      <input
        checked={value}
        onChange={onChange}
        type="checkbox"
        id="agreement"
      />
      <label
        htmlFor="agreement"
        className={cn(!value ? css.checkbox : css.checkboxActive)}
      >
        Отправляя заявку, я соглашаюсь с политикой конфиденциальности и
        пользовательским соглашением
      </label>
    </div>
  );
}
