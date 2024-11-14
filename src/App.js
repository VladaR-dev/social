import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Navigation,
  Profile,
  MessagesContainer,
  News,
  Music,
  Settings,
} from "./components";
import "./App.css";

function App(props) {
  console.log(props);
  // debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <div className="container">
          <Navigation state={props.state.navbarBlock} />

          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="/messages/"
                element={
                  <MessagesContainer
                    state={props.state.messagesPage}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/messages/:id"
                element={<MessagesContainer state={props.state.messagesPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
