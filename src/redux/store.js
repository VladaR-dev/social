import { profileReducer, messageReducer, navbarReducer } from ".";

export const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 36 },
        { id: 3, message: "Hi, how are you?", likesCount: 12 },
        { id: 4, message: "It's my first post", likesCount: 36 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Pavel" },
        { id: 2, name: "Svetlana" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Richard" },
        { id: 5, name: "Lidiya" },
        { id: 6, name: "Vlada" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How yre you?" },
        { id: 3, message: "I'm fine thanks" },
      ],
      newMessageText: "",
    },
    navbarBlok: {
      friendData: [
        { id: 1, name: "Pavel" },
        { id: 2, name: "Svetlana" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Richard" },
        { id: 5, name: "Lidiya" },
        { id: 6, name: "Vlada" },
      ],
    },
  },
  _rerenderEntireTree() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.navbarBlok = navbarReducer(this._state.navbarBlok, action);

    this._rerenderEntireTree();
  },
};
