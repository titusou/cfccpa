import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';


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
            <NavItem eventKey={2} href="#">
            </NavItem>
            <NavDropdown eventKey={1} title="About Us" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/mission/">Mission</MenuItem>
              <MenuItem eventKey={3.2}>Faith</MenuItem>
              <MenuItem eventKey={3.3}>Sunday Schedule</MenuItem>
              <MenuItem eventKey={3.4}>Staff</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
              Contact Us
            </NavItem>
            <NavDropdown eventKey={3} title="Church Life" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Cell Groups</MenuItem>
              <MenuItem eventKey={3.2}>Sunday School</MenuItem>
              <MenuItem eventKey={3.3}>Baptism</MenuItem>
              <MenuItem eventKey={3.4}>Bible Study</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Message" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Sunday Sermon</MenuItem>
              <MenuItem eventKey={4.2}>Sunday School</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={5} title="Community Service" id="basic-nav-dropdown">
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
      <Carousel className="pa-carousel">
        <Carousel.Item>
          <img width={960} height={350} alt="960x350" src="http://www.cfccpaloalto.org/wp-content/uploads/2018/05/pic-e1527315715403-960x350.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={960} height={350} alt="960x350" src="http://www.cfccpaloalto.org/wp-content/uploads/2018/08/1-960x350.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={960} height={350} alt="960x350" src="http://www.cfccpaloalto.org/wp-content/uploads/2018/08/3-960x350.jpg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      </div>
    );
  }
}

export default App;
