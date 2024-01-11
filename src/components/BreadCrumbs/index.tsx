import React from "react";
import css from "./style.module.scss";

// import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";

const routes = [
  { path: "/", breadcrumb: "Меню" },
  { path: "/courses", breadcrumb: "Курсы" },
];

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  console.log(breadcrumbs);
  // return (
  //   <div className="layout">
  //     {/* <div className="breadcrumbs">
  //       <nav>
  //         <Link
  //           to="/"
  //           className={
  //             location.pathname === "/"
  //               ? "breadcrumb-active"
  //               : "breadcrumb-not-active"
  //           }
  //         >
  //           Home
  //         </Link>
  //       </nav>
  //     </div> */}
  //   </div>
  // );
};

export default BreadCrumbs;

// Переписать или с breadcrumb или useLocation
