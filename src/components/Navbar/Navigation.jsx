import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { Friends } from "./Friends";

export const Navigation = (props) => {
  // debugger;
  return (
    <nav className={s.nav}>
      <div className={s.menu}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.default}`
          }
          to="/profile"
        >
          Profile
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.default}`
          }
        >
          Messages
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.default}`
          }
        >
          News
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.default}`
          }
        >
          Music
        </NavLink>
      </div>
      <Friends state={props.state.friendData} />
      <div className={s.settings}>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.default}`
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
