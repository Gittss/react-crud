import React, { Component } from "react";

class mainLayout extends Component {
  state = {};
  componentDidMount() {
    document.body.classList.add("bg-dark");
    document.body.classList.add("text-light");
  }
  render() {
    return <div></div>;
  }
}

export default mainLayout;
