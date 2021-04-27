import React, { Component } from "react";

class mainLayout extends Component {
  state = {};
  componentDidMount() {
    document.body.classList.add("bg-dark");
    document.body.classList.add("text-light");
  }
  render() {
    return (
      <div className="container">
        <a href="http://gayatrii.herokuapp.com" className="App-link">
          <img src="hitmeup.png" alt="hitmeup"></img>
        </a>
        <p>
          This is my first MERN application.
          <br />
          It is a simple create-read-update-delete app.
        </p>
      </div>
    );
  }
}

export default mainLayout;
