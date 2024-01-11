import React, { useState } from "react";
import css from "./style.module.scss";
import Logo from "../../components/Svgs/Logo";
import PhoneInput from "../../components/PhoneInput";

const SignUp = () => {
  const [telephone, setTelephone] = useState("");

  const onChangeTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value = "" },
    } = event;
    setTelephone(value);
  };

  return (
    <div className={css.wrapper}>
      <div className="form">
        <Logo fill={"#040404"} />
        <h1 className="title">Вход в кабинет</h1>
        <span className="subtitle">
          На указанный номер поступит звонок с номера +7 (999) 999-ХХ-ХХ
        </span>
        <PhoneInput
          placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
          value={telephone}
          onChange={onChangeTelephone}
        />
      </div>
    </div>
  );
};

export default SignUp;
