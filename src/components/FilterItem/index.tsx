import React from "react";

import cn from "classnames";
import css from "./style.module.scss";

interface Filter {
  name: string;
}

interface FilterItemProps {
  filter: Filter;
  active: boolean;
  onClick: (index: number, toggleAll: boolean) => void;
  index: number;
}

const FilterItem = (props: FilterItemProps) => {
  const { filter, active, onClick, index } = props;
  return (
    <div
      className={cn(css.filter, active ? css.active : null)}
      onClick={() => onClick(index, index === 0)}
    >
      {filter.name}
    </div>
  );
};

export default FilterItem;
