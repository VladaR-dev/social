import React from "react";
import s from "./Form_post.module.css";

export const FormPost = (props) => {
  console.log("formPost", props);
  const textareaForm = React.createRef();

  const addPost = (e) => {
    e.preventDefault();
    props.addPost();
  };

  const handleChangeText = () => {
    const text = textareaForm.current.value;
    props.handleChangeText(text);
  };

  return (
    <div>
      <form action="" method="get">
        <label htmlFor="form_post">My posts</label>
        <div className={s.textareaBlock}>
          <textarea
            onChange={handleChangeText}
            ref={textareaForm}
            id="form_post"
            name="form_post"
            placeholder="your news..."
            value={props.newPostText}
            autoFocus
            required
          ></textarea>
        </div>

        <button onClick={addPost} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
