import React from "react";
import style from "./style.module.css";
import logo_small from "../assets/logo_small.jpg";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={style.container}>
      <img src={logo_small} alt="logo" className={style.logo} />
      {children}
    </div>
  );
};

export default DefaultLayout;
