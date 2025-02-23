import React from "react";
import "./css/card.css";
import Thumbnail from "./Thumbnail";

export default function CardProject({ images = [], title, paragraph }) {
  return (
    <div className="content-project-container">
      <div className="project-main-container">
        <h4 className="project-title">{title}</h4>
        <Thumbnail images={images} />
        <p className="project-paragraph">{paragraph}</p>
      </div>
    </div>
  );
}
