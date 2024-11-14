const initialState = {
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
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_TEXT":
      state.newMessageText = action.text;
      return state;
    case "SEND_MESSAGE":
      const message = state.newMessageText;
      state.newMessageText = "";
      state.messagesData.push({
        id: 4,
        message: message,
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: "SEND_MESSAGE",
});

export const updateNewMessageTextCreator = (text) => ({
  type: "UPDATE_NEW_MESSAGE_TEXT",
  text: text,
});
