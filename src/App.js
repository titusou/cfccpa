import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-roboto';

import ContactUsWrapper from './components/ContactUsWrapper';
import Dashboard from './components/Dashboard';
import Give from './components/Give';
import Grow from './components/Grow';
import Home from './components/Home';
import Login from './components/Login';
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
                                <NavItem eventKey={1} href="/" id="basic-nav">
                                    Home
                                </NavItem>
                                {/* <NavDropdown
                                    eventKey={2}
                                    title="Learn"
                                    id="basic-nav"
                                    onMouseEnter={this.handleLearnMenuItemOpen}
                                    onMouseLeave={this.handleMenuItemClose}
                                    onToggle={isOpen =>
                                        isOpen ? this.handleLearnMenuItemOpen : this.handleMenuItemClose
                                    }
                                    open={this.state.isLearnMenuItemOpen}
                                >
                                    <MenuItem eventKey={2.1} href="/sermons">
                                        Sermons
                                    </MenuItem>
                                    <MenuItem eventKey={2.2} href="/sunday-school">
                                        Sunday School
                                    </MenuItem>
                                </NavDropdown> */}
                                <NavItem eventKey={3} href="/grow" id="basic-nav">
                                    Grow
                                </NavItem>
                                {/* eventKey={4} is for "Serve" */}
                                {/* <NavItem eventKey={5} href="/ministries" id="basic-nav">
                                    Ministries
                                </NavItem> */}
                                <NavDropdown
                                    eventKey={6}
                                    title="About Us"
                                    id="basic-nav"
                                    onMouseEnter={this.handleAboutUsMenuItemOpen}
                                    onMouseLeave={this.handleMenuItemClose}
                                    onToggle={isOpen =>
                                        isOpen ? this.handleAboutUsMenuItemOpen : this.handleMenuItemClose
                                    }
                                    open={this.state.isAboutUsMenuItemOpen}
                                >
                                    <MenuItem eventKey={6.1} href="/values">
                                        Values
                                    </MenuItem>
                                    <MenuItem eventKey={6.2} href="/sundays">
                                        Sundays
                                    </MenuItem>
                                    <MenuItem eventKey={6.3} href="/staff">
                                        Staff
                                    </MenuItem>
                                    <MenuItem eventKey={6.4} href="/contact-us">
                                        Contact Us
                                    </MenuItem>
                                    {/* <MenuItem eventKey={6.5} href="/login">
                                        Login
                                    </MenuItem> */}
                                </NavDropdown>
                                <NavItem eventKey={7} href="/give" id="basic-nav">
                                    Give
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Router>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/contact-us" component={ContactUsWrapper} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/give" component={Give} />
                        <Route path="/grow" component={Grow} />
                        <Route path="/login" component={Login} />
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
