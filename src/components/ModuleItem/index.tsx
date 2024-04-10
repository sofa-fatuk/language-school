import React, { useLayoutEffect, useRef, useState } from "react";

import ArrowDown from "../Svgs/ArrowDown";

import cn from "classnames";
import css from "./style.module.scss";

interface Iprops {
  title: string;
  lessons: string;
  description: string;
  topic: string;
}

const ModuleItem = (props: Iprops) => {
  const { title, topic, lessons, description } = props;

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
    <>
      <div className={css.item} onClick={updateBlock}>
        <div className={css.front}>
          <div className={cn(css.button, open ? css.open : null)}>
            <ArrowDown />
          </div>
          <div className={css.title}>
            <span>{title}</span>
            <span className={css.topic}> {topic}</span>
          </div>
          <span className={css.lessons}>{lessons}</span>
        </div>
        <div
          className={css.description}
          ref={ref}
          style={{ maxHeight: open ? descriptionHeight : 0 }}
        >
          <p className={css.text}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ModuleItem;
