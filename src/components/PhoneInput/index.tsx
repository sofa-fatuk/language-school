import React from "react";
import InputMask from "react-input-mask";

import css from "./style.module.scss";

interface Iprops {
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput = (props: Iprops) => {
  const { placeholder, required, value, onChange } = props;

  return (
    <label className={css.input}>
      <InputMask
        className={css.field}
        mask="+7\  999 999 99 99"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default PhoneInput;
