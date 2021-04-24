import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      } else this.setState({ users: 0 });
    });
  }

  deleteUser = async (id) => {
    await axios
      .get(`http://localhost:3001/user/delete/${id}`)
      .then((res) => console.log(res.data));
    window.location.reload();
  };

  render() {
    console.log("usersss : " + this.state.users);
    const users = this.state.users.map((user) => (
      <div key={user._id}>
        <table className="table text-light">
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
              <Link
                to={{
                  pathname: "/user/update",
                  state: { id: user._id },
                }}
              >
                <td>
                  <i className="fa fa-pencil"></i> update
                </td>
              </Link>
              <td onClick={() => this.deleteUser(user._id)}>
                <i className="fa fa-trash"></i> delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
    return <div className="container">{users}</div>;
  }
}

export default ViewAll;
