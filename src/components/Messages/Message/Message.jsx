import React from "react";
import s from "../Messages.module.css";

export const Message = (props) => {
  return (
    <div className={s.messageBlock}>
      <div className={s.item}>{props.message}</div>
    </div>
  );
};
