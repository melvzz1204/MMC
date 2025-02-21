import "./css/head.css";
import Menulog from "/Slide-img/menu.svg";
import SocialMedia from "./component/SocialMedia";
import Sidepanel from "./component/Sidepanel";
import mmcLogo from "/MMC-log.png";
import { useState } from "react";

export default function Head() {
  const [show, setShow] = useState(false);

  return (
    <>
      <SocialMedia />
      <div className="head-main-container">
        <div className="title-menu-container">
          <div>
            <img src={mmcLogo} alt="MMClogo" className="MMMlogo" />
          </div>
          <div>
            <h2 className="title-menu">MMC</h2>
            <p className="subtitle-menu">Construction Services</p>
          </div>
        </div>
        <img
          src={Menulog}
          alt="menu"
          className="head-menu-img"
          onClick={() => setShow(!show)}
        />
      </div>
      <Sidepanel show={show} setShow={setShow} />
    </>
  );
}
