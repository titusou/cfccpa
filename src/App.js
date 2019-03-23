import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-roboto';

import ContactUsWrapper from './components/ContactUsWrapper';
import Grow from './components/Grow';
import Home from './components/Home';
import Ministries from './components/Ministries';
import Sermons from './components/Sermons';
import Staff from './components/Staff';
import SundaySchedule from './components/SundaySchedule';
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
                                {/* eventKey={3} is for "Serve" */}
                                <NavItem eventKey={4} href="/ministries" id="basic-nav">
                                    Ministries
                                </NavItem>
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
                                    <MenuItem eventKey={5.3} href="/sundays">
                                        Sundays
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
                        <Route path="/contact-us" component={ContactUsWrapper} />
                        <Route path="/grow" component={Grow} />
                        <Route path="/ministries" component={Ministries} />
                        <Route path="/sermons" component={Sermons} />
                        <Route path="/staff" component={Staff} />
                        <Route path="/sundays" component={SundaySchedule} />
                        <Route path="/sunday-school" component={SundaySchool} />
                        <Route path="/values" component={Values} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
