import React, { useState } from "react";
import css from "./style.module.scss";
import PhoneInput from "../PhoneInput";
import LinkButton from "../LinkButton";
import AgreementCheckbox from "../AgreementCheckbox";

const RegistrationBlock = () => {
  const [telephone, setTelephone] = useState("");
  const [agreed, setAgreed] = useState(true);

  const onChangeTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value = "" },
    } = event;
    setTelephone(value);
  };

  const onCheck = () => {
    setAgreed((prevState) => !prevState);
  };

  return (
    <div className={css.container}>
      <div className={css.registration}>
        <h2 className={css.title}>
          Регистрируйтесь и приступайте к первому бесплатному уроку
        </h2>
        <div className={css.form}>
          <span className={css.name}>Телефон *</span>
          <div className={css.phoneInput}>
            <PhoneInput
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              value={telephone}
              onChange={onChangeTelephone}
            />
            <LinkButton value="Начать обучение" style="primary" />
          </div>
          <div className={css.agreement}>
            <AgreementCheckbox value={agreed} onChange={onCheck} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBlock;
