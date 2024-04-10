import React, { Fragment, memo, useState } from "react";
import ReactPaginate from "react-paginate";

import ArrowRightSlider from "../Svgs/ArrowRightSlider";
import LeftRightSlider from "../Svgs/LeftRightSlider";

import css from "./style.module.scss";

interface Item {
  id: string;
}

export interface IProps {
  itemsPerPage?: number;
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  gap?: number;
  total?: number;
  changeQueryParams?: any; //правка
  _page: string;
}

const PaginatedItems = ({
  itemsPerPage = 6,
  items,
  renderItem,
  gap = 40,
  changeQueryParams,
  total = 1000,
  _page,
}: IProps) => {
  const pageCount = Math.ceil(total / itemsPerPage);
  const handlePageClick = ({ selected }: { selected: number }) => {
    changeQueryParams({
      _page: selected + 1,
    });
  };

  return (
    <>
      <div className={css.items} style={{ gap }}>
        {items.map((item, index) => (
          <Fragment key={item.id || index}>{renderItem(item)}</Fragment>
        ))}
      </div>
      {total > itemsPerPage && (
        <ReactPaginate
          // Передать сюда страницу из поисковой строки
          forcePage={parseInt(_page) - 1}
          className={css.numbers}
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          previousLabel={<LeftRightSlider />}
          nextLabel={<ArrowRightSlider />}
          breakLabel="..."
          containerClassName={css.pagination}
          activeClassName={css.active}
          pageClassName={css.page}
          previousClassName={css.previous}
          nextClassName={css.next}
        />
      )}
    </>
  );
};

export default memo(PaginatedItems);
