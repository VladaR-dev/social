import React from "react";
import s from "./Header.module.css";
import headerLogo from "../../assets/img/18-01.jpg";

export const Header = () => {
  return (
    <header className={s.header}>
      <img alt="logo" src={headerLogo} />
    </header>
  );
};
