import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function deleteUser(id) {
  axios
    .get(`http://localhost:3001/user/delete/${id}`)
    .then((res) => console.log(res.data));
  window.location.reload();
}

const USER = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.phone}</td>
    <Link
      to={{
        pathname: "/user/update",
        state: { id: props.user._id },
      }}
      className="App-link"
    >
      <td>
        <i className="fa fa-pencil"></i> update
      </td>
    </Link>
    <td className="App-link" onClick={() => deleteUser(props.user._id)}>
      <i className="fa fa-trash"></i> delete
    </td>
  </tr>
);

class ViewAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/user/viewAll").then((res) => {
      if (res.data.length > 0) {
        const users = res.data;
        this.setState({ users: users });
      } else this.setState({ users: null });
    });
  }

  userList() {
    return this.state.users.map((user, i) => {
      return <USER user={user} key={i} />;
    });
  }

  render() {
    if (this.state.users) {
      return (
        <table className="table text-light container">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      );
    } else return <div className="container">No users created</div>;
  }
}

export default ViewAll;
