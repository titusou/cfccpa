import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-roboto';

import ContactUs from './components/ContactUs';
import Grow from './components/Grow';
import Home from './components/Home';
import Sermons from './components/Sermons';
import Staff from './components/Staff';
import SundaySchool from './components/SundaySchool';
import Values from './components/Values';
import paLogo from './assets/pa-logo.png';
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLearnMenuItemOpen: false, isMinistriesMenuItemOpen: false, isAboutUsMenuItemOpen: false };
    }

    handleLearnMenuItemOpen = () => {
        this.setState({ isLearnMenuItemOpen: true });
    };

    handleMinistriesMenuItemOpen = () => {
        this.setState({ isMinistriesMenuItemOpen: true });
    };

    handleAboutUsMenuItemOpen = () => {
        this.setState({ isAboutUsMenuItemOpen: true });
    };

    handleMenuItemClose = () => {
        this.setState({ isLearnMenuItemOpen: false, isMinistriesMenuItemOpen: false, isAboutUsMenuItemOpen: false });
    };

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
                                <NavDropdown
                                    eventKey={1}
                                    title="Learn"
                                    id="basic-nav"
                                    onMouseEnter={this.handleLearnMenuItemOpen}
                                    onMouseLeave={this.handleMenuItemClose}
                                    onToggle={isOpen =>
                                        isOpen ? this.handleLearnMenuItemOpen : this.handleMenuItemClose
                                    }
                                    open={this.state.isLearnMenuItemOpen}
                                >
                                    <MenuItem eventKey={1.1} href="/sermons">
                                        Sermons
                                    </MenuItem>
                                    <MenuItem eventKey={1.2} href="/sunday-school">
                                        Sunday School
                                    </MenuItem>
                                </NavDropdown>
                                <NavItem eventKey={2} href="/grow" id="basic-nav">
                                    Grow
                                </NavItem>
                                <NavItem eventKey={3} href="/serve" id="basic-nav">
                                    Serve
                                </NavItem>
                                <NavDropdown
                                    eventKey={4}
                                    title="Ministries"
                                    id="basic-nav"
                                    onMouseEnter={this.handleMinistriesMenuItemOpen}
                                    onMouseLeave={this.handleMenuItemClose}
                                    onToggle={isOpen =>
                                        isOpen ? this.handleMinistriesMenuItemOpen : this.handleMenuItemClose
                                    }
                                    open={this.state.isMinistriesMenuItemOpen}
                                >
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
                                <NavDropdown
                                    eventKey={5}
                                    title="About Us"
                                    id="basic-nav"
                                    onMouseEnter={this.handleAboutUsMenuItemOpen}
                                    onMouseLeave={this.handleMenuItemClose}
                                    onToggle={isOpen =>
                                        isOpen ? this.handleAboutUsMenuItemOpen : this.handleMenuItemClose
                                    }
                                    open={this.state.isAboutUsMenuItemOpen}
                                >
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
                        <Route path="/chinese-treatment" render={() => 'chinese treatment'} />
                        <Route path="/citizenship-class" render={() => 'citizenship class'} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/english-class" render={() => 'english class'} />
                        <Route path="/grow" component={Grow} />
                        <Route path="/sermons" component={Sermons} />
                        <Route path="/serve" render={() => 'serve'} />
                        <Route path="/soul-food" render={() => 'soul food'} />
                        <Route path="/staff" component={Staff} />
                        <Route path="/sunday-schedule" render={() => 'sunday schedule'} />
                        <Route path="/sunday-school" component={SundaySchool} />
                        <Route path="/values" component={Values} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
