import React from "react";

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => onClick(image.largeImageURL)}
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
