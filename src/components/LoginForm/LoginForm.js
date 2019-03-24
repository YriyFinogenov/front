import React from 'react';
import LoginInput from '../LoginInput/LoginInput';
import Submit from '../Submit/Submit';
import validator from 'validator';
import Schem from '../../validators/ValidationSchems';
import {connect} from 'react-redux';
import {loginAction} from "../../actions/actionCreator";
import {Redirect} from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.notFoundUser=false;
        this.serverError=false;
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
        const obj={
            email: this.loginData.email,
            password: this.loginData.password
        };
        this.props.loginRequest(obj);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.error){
            if(nextProps.error.status===404){
                this.notFoundUser=true;
            }
            else{
                this.serverError=true;
            }
        }
        if(nextProps.accessToken){
            localStorage.setItem('accessToken',nextProps.accessToken);
            console.log(nextProps.accessToken);
        }
    }


    render() {
        if(this.props.success){
            return <Redirect to='/'/>
        }

        return (
            <div className="LoginFormContainer">
                {this.notFoundUser && <span>Invalid Email or Password.</span>}
                {this.serverError && <span>Server trouble</span>}
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

const mapStateToProps=(state)=>{
    return state.login;
};

const mapDispatchToProps=(dispatch)=>(
    {loginRequest: (data)=>dispatch(loginAction(data))}
);

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);