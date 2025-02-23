import "./css/content.css";
import Carousell01 from "/carousell/1.jpg";
import Carousell02 from "/carousell/2.jpg";
import Carousell03 from "/carousell/3.jpg";
import Content from "./json/content.json";
import CardProject from "./CardProject";
import { useState, useEffect } from "react";
import AppointmentForm from "./component/appointmentform";

export default function content() {
  const [hideform, setHideForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = [Carousell01, Carousell02, Carousell03];

  const goToPrevious = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 500); // Match the CSS transition duration
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 300); // Match the CSS transition duration
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 1 second

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <div className="main-content-container">
        <h1 className="content-title-head">
          Dream it and we build it together
        </h1>
        <button
          className="primary-btn btn-content"
          onClick={() => {
            setHideForm(!hideform);
          }}
        >
          Request Appointment
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Carousel ${currentImageIndex + 1}`}
          className={`img-carousell ${isFading ? "fade-out" : ""}`}
        />
      </div>
      <div className="content-project-container">
        <span>Latest Projects</span>
        <hr className="hrhr" />
      </div>
      <div className="main-content-container">
        {Content.map((item) => (
          <CardProject
            key={item.id}
            images={item.images}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
        <AppointmentForm hideform={hideform} setHideForm={setHideForm} />
      </div>
    </>
  );
}
