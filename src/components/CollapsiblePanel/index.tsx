import React, { useLayoutEffect, useRef, useState } from "react";

import css from "./style.module.scss";
import OpenIcon from "../Svgs/OpenIcon";
import CloseIcon from "../Svgs/CloseIcon";

interface Iprops {
  title: string;
  description: string;
}

const CollapsiblePanel = (props: Iprops) => {
  const { title, description } = props;

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
      <div
        className={css.item}
        onClick={updateBlock}
        style={{
          background: open ? "#EFEFFF" : "#fff",
        }}
      >
        <div className={css.front}>
          <div className={css.button}>
            {open ? <CloseIcon /> : <OpenIcon />}
          </div>
          <span className={css.title}>{title}</span>
        </div>
        <div
          ref={ref}
          style={{ maxHeight: open ? descriptionHeight : 0 }}
          className={css.description}
        >
          <p className={css.text}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default CollapsiblePanel;
