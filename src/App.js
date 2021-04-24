import "./App.css";
import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navbar";
import CreateUser from "./components/createUser";
import ViewAll from "./components/viewAll";
import mainLayout from "./components/mainLayout";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" component={mainLayout} />
      <Route path="/user/createUser" component={CreateUser} />
      <Route path="/user/viewAll" component={ViewAll} />
      <Route path="/user/update" component={CreateUser} />
    </Router>
  );
}

export default App;
