import React, { Fragment, memo, useState } from "react";
import css from "./style.module.scss";
import ReactPaginate from "react-paginate";
import ArrowRightSlider from "../Svgs/ArrowRightSlider";
import LeftRightSlider from "../Svgs/LeftRightSlider";

interface Item {
  id: string;
}

export interface IProps {
  itemsPerPage?: number;
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  gap?: number;
}

const PaginatedItems = ({
  itemsPerPage = 6,
  items,
  renderItem,
  gap = 40,
}: IProps) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={css.items} style={{ gap }}>
        {currentItems.map((item, index) => (
          <Fragment key={item.id || index}>{renderItem(item)}</Fragment>
        ))}
      </div>
      {items.length > itemsPerPage && (
        <ReactPaginate
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
