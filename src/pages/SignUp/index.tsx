import React, { useState } from "react";
import css from "./style.module.scss";
import Logo from "../../components/Svgs/Logo";
import PhoneInput from "../../components/PhoneInput";
import LinkButton from "../../components/LinkButton";
import SocialButton from "../../components/SocialButton";
import VkSignUp from "../../components/Svgs/VkSignUp";
import YandexIcon from "../../components/Svgs/YandexIcon";
import GosuslugiIcon from "../../components/Svgs/GosuslugiIcon";

const SignUp = () => {
  const [telephone, setTelephone] = useState("");

  const onChangeTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value = "" },
    } = event;
    setTelephone(value);
  };

  return (
    <div className={css.authPage}>
      <div className={css.logo}>
        <Logo fill={"#040404"} />
      </div>
      <div className={css.wrapper}>
        <div className={css.data}>
          <div className={css.form}>
            <h1 className={css.title}>Вход в кабинет</h1>
            <span className={css.subtitle}>
              На указанный номер поступит звонок с номера <br />
              +7 (999) 999-ХХ-ХХ
            </span>
            <span className={css.phone}>Телефон</span>
            <PhoneInput
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              value={telephone}
              onChange={onChangeTelephone}
            />
            <div className={css.submit}>
              <LinkButton
                link="/"
                value="Продолжить"
                type="submit"
                style="primary"
              />
            </div>

            <div className={css.splitter}>или</div>
            <div className={css.socials}>
              <SocialButton
                Icon={<GosuslugiIcon />}
                link="/"
                value="Войти через Госуслуги"
              />
              <SocialButton
                Icon={<VkSignUp />}
                link="/"
                value="Через ВКонтакте"
              />
              <SocialButton
                Icon={<YandexIcon />}
                link="/"
                value="Войти с Яндекс ID"
              />
            </div>
          </div>
        </div>
        <div className={css.image}>
          <img src="../img/door.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
