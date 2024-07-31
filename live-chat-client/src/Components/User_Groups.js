import React from "react";
import "./myStyles.css";
import logo from "../Images/live-chat_512px.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const User_Groups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img
          src={logo}
          alt="logo"
          style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
        />
        <p className="ug-title">Online Users</p>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>

      <div className="ug-list">
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test User</p>
        </div>

      </div>
    </div>
  );
};

export default User_Groups;
