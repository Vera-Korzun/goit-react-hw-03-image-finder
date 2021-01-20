import React, { Component } from "react";

//import axios from "axios";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import fetchImg from "./api/api";
import Button from "./button/Button";
import LoaderSpinner from "./loader/Loader";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    loading: false,
    images: [],
    page: 1,
    query: "",
  };

  getPhoto = async (search, page = 1) => {
    // console.log("getPhoto page=>>", page);
    // console.log("getPhoto search=>>", search);
    this.setState({
      loading: true,
    });
    console.log("state loading ", this.state.loading);
    const result = await fetchImg(search, page);
    this.setState((prev) => ({
      ...prev,
      images: [...result],
      page: 2,
      query: search,
      loading: false,
      isOpenModal: false,
      largeImageURL: "",
    }));
  };

  loadMore = async (e) => {
    const { query, page } = this.state;
    this.setState({
      loading: true,
    });
    const result = await fetchImg(query, page);
    this.setState((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...result],
      page: prevState.page + 1,
      loading: false,
    }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  openModal = (largeImageURL) => {
    console.log(largeImageURL);
    this.setState({
      isOpenModal: true,
      largeImageURL: largeImageURL,
    });
    //console.log(e);
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { images, loading, isOpenModal, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getPhoto} />
        {loading && <LoaderSpinner />}
        <ImageGallery images={images} onClick={this.openModal} />
        {images.length > 0 && <Button onClick={this.loadMore} />}
        {isOpenModal && (
          <Modal onClose={this.closeModal} imageURL={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
