import React, { useLayoutEffect, useRef, useState } from "react";
import css from "./style.module.scss";
import ArrowDown from "../Svgs/ArrowDown";

interface Iprops {
  title: string;
  lessons: string;
  description: string;
}

const ModuleItem = (props: Iprops) => {
  const { title, lessons, description } = props;

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

  console.log(elementHeight);

  return (
    <>
      <div className={css.item} onClick={updateBlock}>
        <div className={css.front}>
          <div className={css.button}>
            <ArrowDown />
          </div>
          <span className={css.title}>{title}</span>
          <span className={css.lessons}>{lessons}</span>
        </div>
        <div
          className={css.description}
          ref={ref}
          style={{ maxHeight: open ? descriptionHeight : 0 }}
        >
          {/* <div className={css.line}></div> */}
          <p className={css.text}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ModuleItem;
