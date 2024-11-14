const initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 36 },
    { id: 3, message: "Hi, how are you?", likesCount: 12 },
    { id: 4, message: "It's my first post", likesCount: 36 },
  ],
  newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      state.postsData.push({
        id: 5,
        message: state.newPostText,
        likesCount: 20,
      });
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: "ADD-POST",
});

export const handleChangeTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  text: text,
});
