import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  //console.log("images==>", images);
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
