import React from "react";
import "./css/thumbnail.css";

const Thumbnail = ({ images }) => {
  const visibleImages = images.slice(0, 3);
  const remainingImagesCount = images.length - visibleImages.length;

  return (
    <div className="thumbnail-container">
      {visibleImages.length > 0 && (
        <img
          src={visibleImages[0].src}
          alt={`Thumbnail 1`}
          className="thumbnail-image thumbnail-image-main"
        />
      )}
      <div className="thumbnail-subcontainer">
        {visibleImages.slice(1, 3).map((image, index) => (
          <img
            key={index + 1}
            src={image.src}
            alt={`Thumbnail ${index + 2}`}
            className="thumbnail-image thumbnail-image-small"
          />
        ))}
      </div>
      {remainingImagesCount > 0 && (
        <div className="remaining-count">+{remainingImagesCount}</div>
      )}
    </div>
  );
};

export default Thumbnail;
