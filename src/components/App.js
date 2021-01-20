import React, { Component } from "react";
//import axios from "axios";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import fetchImg from "./api/api";

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
  };
  getPhoto = async (search, page = 1) => {
    //console.log("search ==>>", search);
    const result = await fetchImg(search, page);
    this.setState({ images: [...result], query: search });
    // console.log("this.state.query ==>>", this.state.query);
    // console.log("this.state.images ==>>", this.state.images);
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getPhoto} />
        <ImageGallery images={images} />
      </div>
    );
  }
}

export default App;

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна
