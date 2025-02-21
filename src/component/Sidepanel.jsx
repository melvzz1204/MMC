import "../css/sidepanel.css";
import Closebtn from "/Slide-img/close.svg";

export default function Sidepanel({ show, setShow }) {
  return (
    <div className="sidepanel-main-container">
      {show && (
        <ul>
          <img
            src={Closebtn}
            alt=""
            className="img-close-btn"
            onClick={() => {
              setShow(false);
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
