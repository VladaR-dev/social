import React from "react";
import {
  handleChangeTextActionCreator,
  addPostActionCreator,
} from "../../../redux";
import { FormPost } from "./Form_post";

export const FormPostContainer = (props) => {
  console.log("formPostContainer", props);

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const handleChangeText = (text) => {
    props.dispatch(handleChangeTextActionCreator(text));
  };

  return (
    <FormPost
      newPostText={props.newPostText}
      handleChangeText={handleChangeText}
      addPost={addPost}
    />
  );
};
