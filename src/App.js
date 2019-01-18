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
              <a href="http://localhost:3000/">CFCCPA</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="About Us" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1} href="/mission/">Mission</MenuItem>
              <MenuItem eventKey={1.2} href="/faith/">Faith</MenuItem>
              <MenuItem eventKey={1.3} href="/sunday-schedule/">Sunday Schedule</MenuItem>
              <MenuItem eventKey={1.4} href="/staff/">Staff</MenuItem> 
            </NavDropdown>
            <NavItem eventKey={2} href="/contact-us/">Contact Us</NavItem>
            <NavDropdown eventKey={3} title="Church Life" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/fellowship-groups">Fellowship Groups</MenuItem>
              <MenuItem eventKey={3.3} href="/baptism">Baptism</MenuItem>
              <MenuItem eventKey={3.4} href="/bible-study">Bible Study</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Message" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1} href="/sunday-sermon">Sunday Sermon</MenuItem>
              <MenuItem eventKey={4.2} href="/sunday-school">Sunday School</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={5} title="Community Service" id="basic-nav-dropdown">
              <MenuItem eventKey={5.1} href="/citizenship-class">Citizenship Class</MenuItem>
              <MenuItem eventKey={5.2} href="/english-class">English Class</MenuItem>
              <MenuItem eventKey={5.3} href="/soul-food">Soul Food</MenuItem>
              <MenuItem eventKey={5.4} href="/chinese-treatment">Chinese Treatment</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={6} title="English" id="basic-nav-dropdown">
              <MenuItem eventKey={6.1} href="/english">English</MenuItem>
              <MenuItem eventKey={6.2} href="/chinese">Chinese</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/mission" render={() => "mission"} />
            <Route path="/faith" render={() => "faith"} />
            <Route path="/sunday-schedule" render={() => "sunday schedule"} />
            <Route path="/staff" render={() => "staff"} />
            <Route path="/contact-us" render={() => "contact us"} />
            <Route path="/fellowship-groups" render={() => "fellowship groups"} />
            <Route path="/baptism" render={() => "baptism"} />
            <Route path="/bible-study" render={() => "bible study"} />
            <Route path="/sunday-sermon" render={() => "sunday sermon"} />
            <Route path="/sunday-school" render={() => "sunday school"} />
            <Route path="/citizenship-class" render={() => "citizenship class"} />
            <Route path="/english-class" render={() => "english class"} />
            <Route path="/soul-food" render={() => "soul food"} />
            <Route path="/chinese-treatment" render={() => "chinese treatment"} />
            <Route path="/english" render={() => "english"} />
            <Route path="/chinese" render={() => "chinese"} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
