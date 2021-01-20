import React, { Component } from "react";

class Modal extends Component {
  state = {};

  escFunction = (e) => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.escFunction, false);
  };
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.escFunction, false);
  };

  render() {
    return (
      <div className="Overlay" onClick={this.props.onClose}>
        <div className="Modal">
          <img src={this.props.imageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
