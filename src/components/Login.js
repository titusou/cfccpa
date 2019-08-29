import axios from 'axios';
import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        axios
            .post('http://localhost:3001/users', {
                username: this.state.username,
                password: this.state.password,
            })
            .then(response => {
                this.props.history.push('/dashboard');
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        console.log(this.state.username);
        console.log(this.state.password);
    };

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
