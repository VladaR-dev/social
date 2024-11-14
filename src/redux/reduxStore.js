import { profileReducer } from "./profilePageReducer";
import { messageReducer } from "./messagePageReducer";
import { navbarReducer } from "./navbarBlockReducer";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  navbarBlock: navbarReducer,
});

export const store = createStore(reducers);
