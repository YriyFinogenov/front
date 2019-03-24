import React from 'react';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import validator from 'validator';
import Schem from "../../validators/ValidationSchems";
import ChoseRole from '../../components/ChoseRole/ChoseRole';
import {connect} from "react-redux";
import {registerAction} from '../../actions/actionCreator';
import {Redirect} from 'react-router-dom';
import './RegistrationForm.sass';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.errorServer=false;
        this.registrationData = {
            firstName: '',
            lastName: '',
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'customer'
        }
    }

    setValue = (target) => {
        this.registrationData[target.name] = target.value;
    };

    checkValidInput = (name) => {
        if (name === 'firstName') {
            if (this.registrationData.firstName.length === 0)
                return false;
            return true;
        }
        if (name === 'lastName') {
            if (this.registrationData.lastName.length === 0)
                return false;
            return true;
        }
        if (name === 'displayName') {
            if (this.registrationData.displayName.length === 0)
                return false;
            return true;
        }
        if (name === 'email') {
            if (!validator.isEmail(this.registrationData.email))
                return false;
            return true;
        }
        if (name === 'confirmPassword') {
            if (this.registrationData.password.length === 0 || this.registrationData.password !== this.registrationData.confirmPassword)
                return false;
            return true;
        }
    };


    setValidationStatus = () => {
        if (this.registrationData.firstName.length === 0) {
            alert('First Name cannot be empty');
        } else if (this.registrationData.lastName.length === 0) {
            alert('Last Name cannot be empty')
        } else if (this.registrationData.displayName.length === 0) {
            alert('Screen Name cannot be empty');
        } else if (this.registrationData.email.length === 0) {
            alert('Email Address cannot be empty');
        } else if (!validator.isEmail(this.registrationData.email)) {
            alert('Email address is wrong');
        } else if (this.registrationData.password.length === 0) {
            alert('Password cannot be empty');
        } else if (this.registrationData.confirmPassword.length === 0) {
            alert('Password Confirmation cannot be empty');
        } else if (this.registrationData.confirmPassword !== this.registrationData.password) {
            alert('Password not matched');
        }
    };


    validateDataRegistration = () => {
        const obj = {
            email: this.registrationData.email,
            firstname: this.registrationData.firstName,
            lastname: this.registrationData.lastName,
            displayname: this.registrationData.displayName,
            password: this.registrationData.password,
            confirmPassword: this.registrationData.confirmPassword,
            role: this.registrationData.role
        };
        return Schem.RegistrationSchem.isValid(obj);
    };

    sendRequest = () => {
        const obj={
            firstname: this.registrationData.firstName,
            lastname: this.registrationData.lastName,
            displayname: this.registrationData.displayName,
            email: this.registrationData.email,
            password: this.registrationData.password,
            role: this.registrationData.role
        };
        this.props.register(obj);
    };

    componentWillReceiveProps(nextProps, nextContext) {
      if(nextProps.error){
          if(nextProps.error.status===409){
              alert('User with this email already exist!');
          }
          else{
              this.errorServer=true;
          }
      }
      if(nextProps.accessToken){
          localStorage.setItem('accessToken',nextProps.accessToken);
      }
    }


    render() {
        if(this.props.success){
            return <Redirect to='/'/>
        }
        return (
            <div className="registrationFormContainer">
                <div className="signupInfoContainer">
                    <span className='createAnAccount'>
                        CREATE AN ACCOUNT
                     </span>
                    <span className='privateInfo'>
                         We always keep your name and email address private.
                    </span>
                </div>
                <Input inputType='text' placeholder='First Name' setValue={this.setValue} name='firstName'
                       error='Field cannot be empty' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='Last Name' setValue={this.setValue} name='lastName'
                       error='Field cannot be empty' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='Display Name' setValue={this.setValue} name='displayName'
                       error='Display name should be more than 4 characters' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='Email Address' setValue={this.setValue} name='email'
                       error='Please check the format of email address' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='Password' setValue={this.setValue} name='password' error='Field cannot be empty'
                       checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='Password Confirmation' setValue={this.setValue} name='confirmPassword'
                       error='Password confirmation needs to match original password'
                       checkValidInput={this.checkValidInput}/>
                <ChoseRole name='role' setValue={this.setValue}/>
                <div className="allowMailing">
                    <input type='checkbox'></input>
                    <span>Allow Squadhelp to send marketing/promotional offers from time to time</span>
                </div>
                <Submit validateData={this.validateDataRegistration} sendRequest={this.sendRequest} setValidationStatus={this.setValidationStatus}/>
                {this.errorServer && <span>Server trouble</span>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state.registration;
};

const mapDispatchToProps = (dispatch) => (
    {register: (data)=>dispatch(registerAction(data))}
);


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);