import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.state = {
      name: "",
      phone: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      phone: this.state.phone,
    };

    axios
      .post("http://localhost:3001/user/createUser", user)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div className="container">
        <h3>Add User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name : </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            ></input>

            <label>Phone : </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            ></input>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
