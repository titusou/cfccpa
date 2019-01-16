import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">CFCCPA</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={2} href="#" />
            <NavDropdown eventKey={1} title="About Us" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/mission/">
                Mission
              </MenuItem>
              <MenuItem eventKey={3.2}>Faith</MenuItem>
              <MenuItem eventKey={3.3}>Sunday Schedule</MenuItem>
              <MenuItem eventKey={3.4}>Staff</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
              Contact Us
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Church Life"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Cell Groups</MenuItem>
              <MenuItem eventKey={3.2}>Sunday School</MenuItem>
              <MenuItem eventKey={3.3}>Baptism</MenuItem>
              <MenuItem eventKey={3.4}>Bible Study</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Message" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Sunday Sermon</MenuItem>
              <MenuItem eventKey={4.2}>Sunday School</MenuItem>
            </NavDropdown>
            <NavDropdown
              eventKey={5}
              title="Community Service"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={5.1}>Citizenship Class</MenuItem>
              <MenuItem eventKey={5.2}>English Class</MenuItem>
              <MenuItem eventKey={5.3}>SoulFood</MenuItem>
              <MenuItem eventKey={5.4}>Chinese Treatment</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={6} title="English" id="basic-nav-dropdown">
              <MenuItem eventKey={6.1}>English</MenuItem>
              <MenuItem eventKey={6.2}>Chinese</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/mission" render={() => "mission"} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
