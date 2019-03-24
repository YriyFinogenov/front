import React from 'react';
import LoginInput from '../LoginInput/LoginInput';
import Submit from '../Submit/Submit';
import validator from 'validator';
import Schem from '../../validators/ValidationSchems';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inValidEmail: false,
            inValidPassword: false
        };
        this.loginData = {
            'email': '',
            'password': ''
        }
    }

    setValue = (target) => {
        this.loginData[target.name] = target.value;
    };


    setValidationStatus = () => {
        if (!validator.isEmail(this.loginData.email)) {
            this.setState({
                inValidEmail: true
            });
        } else if (this.loginData.password.length === 0) {
            this.setState({
                inValidPassword: true,
                inValidEmail: false
            });
        } else {
            this.setState({
                inValidPassword: false,
                inValidEmail: false
            });
        }
    };


    validateDataRegistration = () => {
        return Schem.LoginSchem.isValid({email: this.loginData.email, password: this.loginData.password})
    };

    sendRequest = () => {
        this.setValidationStatus();

    };


    render() {
        return (
            <div className="LoginFormContainer">
                <LoginInput inputType='text' placeholder='input email' setValue={this.setValue} name='email'/>
                {this.state.inValidEmail && <span>Email is not valid format</span>}
                <LoginInput inputType='password' placeholder='input password' setValue={this.setValue} name='password'/>
                {this.state.inValidPassword && <span>Password cannot be empty</span>}
                <Submit validateData={this.validateDataRegistration} sendRequest={this.sendRequest}
                        setValidationStatus={this.setValidationStatus}/>
            </div>
        )
    }
}

export default LoginForm;