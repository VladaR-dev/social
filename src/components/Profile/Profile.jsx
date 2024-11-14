import React from "react";
import s from "./Profile.module.css";
import { FormPostContainer } from "./Sending_Post";
import { PersonInfo } from "./Person_Info";
import { Post } from "./Sending_Post/Post/Post_1";

export const Profile = (props) => {
  console.log("profile", props);
  // debugger;
  return (
    <div className={s.profile}>
      <div className={s.block_1}>
        <img
          alt="profile header"
          src="https://img.freepik.com/free-photo/beautiful-shot-empty-road-middle-rocks-dry-grass-field-cloudy-sky_181624-1797.jpg?w=1380&t=st=1729280571~exp=1729281171~hmac=1b84f705b8f3f62d4c0475fb2d645594cb1473ee5b3c5fa210633d76de275e60"
        />
      </div>
      <PersonInfo />
      <div className={s.posts}>
        <FormPostContainer
          dispatch={props.dispatch}
          newPostText={props.state.newPostText}
        />
        {props.state.postsData.map(({ message, likesCount }) => (
          <Post message={message} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
};
