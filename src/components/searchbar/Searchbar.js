import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  onHandleChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  onFormSubmit = (e) => {
    const { query } = this.state;
    e.preventDefault();
    this.props.onSubmit(query);
    //console.log("onFormSubmit this.state.query ==>>", query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
            value={this.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
