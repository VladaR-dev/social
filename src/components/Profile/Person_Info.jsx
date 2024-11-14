import React from "react";
import s from "./Person_Info.module.css";

export const PersonInfo = () => {
  return (
    <div className={s.personInfoBlock}>
      <div className={s.avatar}>
        <img
          src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296296137285106.png"
          alt="avatar"
        />
      </div>
      <div className={s.personData}>
        <div>Dmitry K.</div>
        <div>Date of Birth: 2 january</div>
        <div>Education: BSU'11</div>
        <div>Web Site: //it-programming.com </div>
      </div>
    </div>
  );
};
