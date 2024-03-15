import { Fragment, FC } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";

import cn from "classnames";
import ArrowBreadCrumbs from "../Svgs/ArrowBreadCrumbs";

interface BreadcrumbItem {
  path: string;
  breadcrumb: string;
}

interface BreadCrumbsProps {
  items: BreadcrumbItem[];
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ items = [] }) => (
  <div className={css.layout}>
    <div className={cn(css.breadcrumbs)}>
      {items.map((el, i) => (
        <Fragment key={i}>
          <Link className={css.link} to={el.path}>
            {el.breadcrumb}
          </Link>
          {i !== items.length - 1 ? <ArrowBreadCrumbs /> : null}
        </Fragment>
      ))}
    </div>
  </div>
);

export default BreadCrumbs;
