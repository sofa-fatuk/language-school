import React, { useLayoutEffect, useRef, useState } from "react";
import css from "./style.module.scss";
import cn from "classnames";

import ArrowDown from "../Svgs/ArrowDown";

interface Iprops {
  title?: string;
  option?: string;
}

const Dropdown = (props: Iprops) => {
  const { title, option } = props;

  const [open, setOpen] = useState(true);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef<any>(null);

  const updateBlock = () => {
    setOpen(!open);
  };

  useLayoutEffect(() => {
    setElementHeight(ref.current?.offsetHeight);
    setOpen(false);
  }, []);

  const descriptionHeight = elementHeight || "auto";

  return (
    <div className={css.item}>
      <div className={css.front} onClick={updateBlock}>
        <div className={css.title}>
          <span>Ещё</span>
        </div>
        <div className={cn(css.button, open ? css.open : null)}>
          {/* <div className={css.button} onClick={updateBlock}> */}
          <ArrowDown />
        </div>
      </div>
      <div
        className={css.description}
        ref={ref}
        style={{ maxHeight: open ? descriptionHeight : 0 }}
      >
        <div>FAQ</div>
        <div>Контакты</div>
        <div>Условия оплаты</div>
      </div>
    </div>
  );
};

export default Dropdown;
