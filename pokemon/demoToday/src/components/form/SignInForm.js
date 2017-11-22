import React, { Component } from 'react';
import Input from './formFields/Input';
import validationFunc from './../../utils/formValidator'

const loginUrl = 'http://localhost:5000/auth/login';

class SignInFrom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async onSubmit(e) {
        e.preventDefault();
        let payload = {
            email: this.state.email,
            password: this.state.password
        };

        try {
            let response = await fetch(loginUrl, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(payload)
            });
            let responseJson = await response.json();

            localStorage.setItem('authtoken', responseJson.token);
        } catch (err) {
            console.error(err);
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let validObj = validationFunc(
            this.state.email,
            this.state.email,
            '',
            this.state.password,
            this.state.password
        );

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset className='App'>
                        <div style={{ display: 'inline-grid' }}>
                            <h2>Sign In</h2>
                            <Input
                                data="email"
                                type="text"
                                name="Email"
                                func={this.onChange}
                                valid={validObj.validMail}
                            />
                            <Input
                                data="password"
                                type="password"
                                name="Password"
                                func={this.onChange}
                                valid={validObj.validPassword}
                            />
                            <input type="submit" value="Log in" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignInFrom;