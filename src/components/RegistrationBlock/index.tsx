import React, { useState } from "react";
import css from "./style.module.scss";
import PhoneInput from "../PhoneInput";
import PurpleButton from "../PurpleButton";

const RegistrationBlock = () => {
  const [telephone, setTelephone] = useState("");

  const onChangeTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value = "" },
    } = event;
    setTelephone(value);
  };

  return (
    <div className={css.container}>
      <div className={css.registration}>
        <h2 className={css.title}>
          Регистрируйтесь и приступайте к первому бесплатному уроку
        </h2>
        <span className={css.name}>Телефон *</span>
        <div className={css.form}>
          <div className={css.phoneInput}>
            <PhoneInput
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              value={telephone}
              onChange={onChangeTelephone}
            />
          </div>

          <PurpleButton value="Начать обучение" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationBlock;
