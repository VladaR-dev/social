import React from "react";
import { Messages } from "./Messages";
import { updateNewMessageTextCreator, sendMessageCreator } from "../../redux";

export const MessagesContainer = (props) => {
  // debugger;
  const sendMessageBtn = () => {
    props.dispatch(sendMessageCreator());
  };

  const handleMessageText = (text) => {
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <Messages
      updateNewMessageText={handleMessageText}
      sendMessage={sendMessageBtn}
      dialogsData={props.state.dialogsData}
      messagesData={props.state.messagesData}
      newMessageText={props.state.newMessageText}
    />
  );
};
