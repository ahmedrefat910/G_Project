import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../icons/Settings/Ellipse 577.png";
import image1 from "../icons/Settings/Ellipse 577 (1).png";
import image2 from "../icons/Settings/Ellipse 577 (2).png";
import image3 from "../icons/Settings/Ellipse 577 (4).png";
import image4 from "../icons/Settings/Ellipse 577 (3).png";
import image5 from "../icons/Settings/Ellipse 577 (5).png";
import image6 from "../icons/Settings/Ellipse 577 (6).png";
import image7 from "../icons/Settings/Ellipse 577 (7).png";
import searchIcon from "../icons/Search.png";

import "../CSS/chat_doc.css";
import Sidebar from "./Sidebar";

function ChatRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="mychat">
      <Sidebar />
      <Navbar />
      <div className="chat-room">
        <div className="l-side">
          <div className="chat-head">
            <h2>Messages</h2>
            <div className="search-bar">
              <img className="sr-ic" src={searchIcon} alt="searchicon" />
              <input
                className="search-input"
                type="search"
                placeholder="search"
              ></input>
            </div>
          </div>

          <button
            className="chat-butt"
            onClick={() => {
              //remove any stored date
              navigate("/ChatDoc");
              setIsOpen(false);
            }}
          >
            <div className="chat-box">
              <div className="profile">
                <img src={image} alt="" />
              </div>
              <div className="last-chat">
                <h3>Dr Ragab Hmada </h3>
                <p>Hi, How are doing today?</p>
              </div>
            </div>
          </button>

          <button
            className="chat-butt"
            onClick={() => {
              //remove any stored date
              navigate("/ChatDoc");
              setIsOpen(false);
            }}
          >
            <div className="chat-box">
              <div className="profile">
                <img src={image1} alt="" />
              </div>
              <div className="last-chat">
                <h3>Dr Ali Mohamed </h3>
                <p>Hi, How are doing today?</p>
              </div>
            </div>
          </button>

          <button
            className="chat-butt"
            onClick={() => {
              //remove any stored date
              navigate("/ChatDoc");
              setIsOpen(false);
            }}
          >
            <div className="chat-box">
              <div className="profile">
                <img src={image2} alt="" />
              </div>
              <div className="last-chat">
                <h3>Dr Malek Mohamed </h3>
                <p>Hi, How are doing today?</p>
              </div>
            </div>
          </button>

          <div className="chat-box">
            <div className="profile">
              <img src={image3} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Mona Ibrahem </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image4} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Omar Ali </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image5} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr Salma Ahmed </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image6} alt="" />
            </div>
            <div className="last-chat">
              <h3>Dr kareem Adel </h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
          <div className="chat-box">
            <div className="profile">
              <img src={image7} alt="" />
            </div>
            <div className="last-chat">
              <h3>Yaser Adel</h3>
              <p>Hi, How are doing today?</p>
            </div>
          </div>
        </div>
        <div className="r-side">
          <div className="massage1"></div>
        </div>
      </div>
    </div>
  );
}
export default ChatRoom;
