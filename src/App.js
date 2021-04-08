import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navbar";
import CreateUser from "./components/createUser";
import ViewAll from "./components/viewAll";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/user/createUser" component={CreateUser} />
      <Route path="/user/viewAll" component={ViewAll} />
    </Router>
  );
}

export default App;
