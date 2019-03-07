import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-roboto';

import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Sermons from './components/Sermons';
import Staff from './components/Staff';
import Values from './components/Values';
import paLogo from './assets/pa-logo.png';
import './styles.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Navbar fixedTop fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">
                                    <img alt="logo" src={paLogo} />
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavDropdown eventKey={1} id="basic-nav-dropdown" noCaret title="Learn">
                                    <MenuItem eventKey={1.1} href="/sermons">
                                        Sermons
                                    </MenuItem>
                                    <MenuItem eventKey={1.2} href="/sunday-school">
                                        Sunday School
                                    </MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={2} id="basic-nav-dropdown" noCaret title="Grow">
                                    <MenuItem eventKey={2.1} href="/fellowship-groups">
                                        Fellowship Groups
                                    </MenuItem>
                                    <MenuItem eventKey={2.3} href="/baptism">
                                        Baptism
                                    </MenuItem>
                                    <MenuItem eventKey={2.4} href="/bible-study">
                                        Bible Study
                                    </MenuItem>
                                </NavDropdown>
                                <NavItem eventKey={3} href="/serve">
                                    Serve
                                </NavItem>
                                <NavDropdown eventKey={4} id="basic-nav-dropdown" noCaret title="Ministries">
                                    <MenuItem eventKey={4.1} href="/citizenship-class">
                                        Citizenship Class
                                    </MenuItem>
                                    <MenuItem eventKey={4.2} href="/english-class">
                                        English Class
                                    </MenuItem>
                                    <MenuItem eventKey={4.3} href="/soul-food">
                                        Soul Food
                                    </MenuItem>
                                    <MenuItem eventKey={4.4} href="/chinese-treatment">
                                        Chinese Treatment
                                    </MenuItem>
                                </NavDropdown>
                                <NavDropdown eventKey={5} id="basic-nav-dropdown" noCaret title="About Us">
                                    <MenuItem eventKey={5.1} href="/values">
                                        Values
                                    </MenuItem>
                                    <MenuItem eventKey={5.3} href="/sunday-schedule">
                                        Sunday Schedule
                                    </MenuItem>
                                    <MenuItem eventKey={5.4} href="/staff">
                                        Staff
                                    </MenuItem>
                                    <MenuItem eventKey={5.5} href="/contact-us">
                                        Contact Us
                                    </MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Router>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/baptism" render={() => 'baptism'} />
                        <Route path="/bible-study" render={() => 'bible study'} />
                        <Route path="/chinese-treatment" render={() => 'chinese treatment'} />
                        <Route path="/citizenship-class" render={() => 'citizenship class'} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/english-class" render={() => 'english class'} />
                        <Route path="/fellowship-groups" render={() => 'fellowship groups'} />
                        <Route path="/sermons" component={Sermons} />
                        <Route path="/serve" render={() => 'serve'} />
                        <Route path="/soul-food" render={() => 'soul food'} />
                        <Route path="/staff" component={Staff} />
                        <Route path="/sunday-schedule" render={() => 'sunday schedule'} />
                        <Route path="/sunday-school" render={() => 'sunday school'} />
                        <Route path="/values" component={Values} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
