import React from "react";
import style from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className={style.container}>
        <main className={style.main}>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
