import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Messages.module.css";
import sd from "./DialogItem.module.css";

export const DialogItem = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <div className={`${sd.item} ${s.active}`}>
      <NavLink to={`${path}`}>
        <div className={sd.userPhoto}>
          <img
            src="https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg"
            alt="user_photo"
          />
        </div>
        <div className={sd.nameUser}>{props.name}</div>
      </NavLink>
    </div>
  );
};
