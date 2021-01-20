import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          onClick={onClick}
          image={image}
          key={`${image.id}${index}`}
          // key={index}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
