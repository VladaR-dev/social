import React from "react";
import s from "./Messages.module.css";
import { Message } from "./Message";
import { DialogItem } from "./DialogsItem";

export const Messages = (props) => {
  debugger;
  const sendingMessage = React.createRef();

  const sendMessageBtn = (e) => {
    e.preventDefault();
    props.sendMessage();
  };

  const handleMessageText = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {props.dialogsData.map(({ id, name }) => (
          <DialogItem name={name} id={id} />
        ))}
      </div>
      <div className={s.messageBlock}>
        <div className={s.messages}>
          {props.messagesData.map(({ message }) => (
            <Message message={message} />
          ))}
        </div>
        <div className={s.textareaBlock}>
          <textarea
            ref={sendingMessage}
            onChange={handleMessageText}
            value={props.newMessageText}
            name="sendingMessage"
            id="sendingMessage"
            placeholder="Enter message"
            required
          ></textarea>
          <button onClick={sendMessageBtn}>Send</button>
        </div>
      </div>
    </div>
  );
};
