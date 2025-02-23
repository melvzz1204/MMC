import "./css/card.css";

export default function CardProject({ images = [], title, paragraph }) {
  return (
    <div className="content-project-container">
      <div className="project-main-container">
        <h4 className="project-title">{title}</h4>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="img-content"
          />
        ))}
        <p className="project-paragraph">{paragraph}</p>
      </div>
    </div>
  );
}
