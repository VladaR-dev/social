import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friends.module.css";

export const Friends = (props) => {
  //   debugger;
  return (
    <div className={s.friendsBlock}>
      {props.state.map(({ id, name }) => {
        return (
          <NavLink to={`/profile/${id}`} className={s.friendItem} key={id}>
            <div className={s.friendItemImg}>
              <img
                src="https://illustrators.ru/uploads/illustration/image/1687137/14.jpg"
                alt="profile_image"
              />
            </div>
            <div className={s.friendItemName}>{name}</div>
          </NavLink>
        );
      })}
    </div>
  );
};
