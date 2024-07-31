import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Users from "./Components/Users";
import Groups from "./Components/Groups";
import CreateGroups from "./Components/CreateGroups";
import ChatArea from "./Components/ChatArea";
import User_Groups from "./Components/User_Groups";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat/:_id" element={<ChatArea/>} />
          <Route path="users" element={<Users/>} />
          <Route path="groups" element={<Groups />} />
          <Route path="create-groups" element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
