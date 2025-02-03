import "./css/sidepanel.css";
import Closebtn from "./assets/close.svg";
import { useState } from "react";

export default function Sidepanel() {
  const [close, setClose] = useState(true);
  return (
    <div className="sidepanel-main-container">
      {close && (
        <ul>
          <img
            src={Closebtn}
            alt=""
            className="img-close-btn"
            onClick={() => {
              setClose(false);
            }}
          />
          <li>Home</li>
          <hr />
          <li>Profile</li>
          <hr />
          <li>Projects</li>
          <hr />
          <li>Our Services</li>
          <hr />
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}
