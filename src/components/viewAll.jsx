import React, { Component } from "react";
import axios from "axios";

class ViewAll extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/user/viewAll").then((res) => {
      if (res.data.length > 0) {
        const users = res.data;
        this.setState({ users: users });
      } else this.setState({ users: "No users" });
    });
  }

  render() {
    const users = this.state.users.map((user) => (
      <div style={{ border: "1px solid black" }} key={user._id}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
    return <div className="container">{users}</div>;
  }
}

export default ViewAll;
