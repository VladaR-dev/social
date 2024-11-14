import React from "react";
import p from "./Post_1.module.css";

export const Post = (props) => {
  return (
    <div>
      <div className={p.circle_image}>
        <img
          src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296296137285106.png"
          alt="person_1"
        />
      </div>
      <span>{props.message}</span>
      <div>Likes {props.likesCount}</div>
    </div>
  );
};
