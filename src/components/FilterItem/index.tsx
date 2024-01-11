import React from "react";
import cn from "classnames";

import css from "./style.module.scss";

interface Language {
  id: string;
  name: string;
}

interface FilterItemProps {
  language: Language;
  active: boolean;
  onClick: (ids: string[] | null, toggleAll: boolean) => void;
}

const FilterItem = (props: FilterItemProps) => {
  const { language, active, onClick } = props;
  return (
    <div
      className={cn(css.filter, active ? css.active : null)}
      onClick={() =>
        onClick(language.id === "1" ? null : [language.id], language.id === "1")
      }
    >
      {language.name}
    </div>
  );
};

export default FilterItem;
