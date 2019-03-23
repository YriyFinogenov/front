import React from 'react';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import validator from 'validator';
import Schem from "../../validators/ValidationSchems";
import RegistrationSchem from '../../validators/ValidationSchems';

class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isValid: true
        };
        this.registrationData={
            firstName: '',
            lastName: '',
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: ''
        }
    }

    setValue=(target)=>{
      this.registrationData[target.name]=target.value;
    };

    checkValidInput=(name)=>{
        if(name==='firstName'){
            if(this.registrationData.firstName.length===0)
                return false;
            return true;
        }
        if(name==='lastName'){
            if(this.registrationData.lastName.length===0)
                return false;
            return true;
        }
        if(name==='displayName'){
            if(this.registrationData.displayName.length===0)
                return false;
            return true;
        }
        if(name==='email'){
            if(!validator.isEmail(this.registrationData.email))
                return false;
            return true;
        }
        if(name==='confirmPassword'){
            if(this.registrationData.password.length===0 || this.registrationData.password!==this.registrationData.confirmPassword)
                return false;
            return true;
        }
    };



    setValidationStatus=(status)=>{
        if(status && !this.state.isValid){
            this.setState({
                isValid: true
            })
        }
        if(!status && this.state.isValid){
            this.setState({
                isValid: false
            })
        }
    };


    validateDataRegistration=()=>{
        const obj={
          email: this.registrationData.email,
          firstname: this.registrationData.firstName,
          lastname: this.registrationData.lastName,
          displayname: this.registrationData.displayName,
          password: this.registrationData.password,
          role: 'customer'
        };
        return Schem.RegistrationSchem.isValid(obj);
    };

    sendRequest=()=>{
        console.log('send request');
    };



    render(){
        return (
            <div className="registrationFormContainer">
                <Input inputType='text' placeholder='input first Name' setValue={this.setValue} name='firstName' error='must be' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='input last Name' setValue={this.setValue} name='lastName' error='must be' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='input display Name' setValue={this.setValue} name='displayName' error='must be' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='input email' setValue={this.setValue} name='email' error='must be email' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='input password' setValue={this.setValue} name='password' error='' checkValidInput={this.checkValidInput}/>
                <Input inputType='text' placeholder='confirm password' setValue={this.setValue} name='confirmPassword' error='Password confirmation needs to match original password' checkValidInput={this.checkValidInput}/>
                <Submit validateData={this.validateDataRegistration} sendRequest={this.sendRequest} setValidationStatus={this.setValidationStatus}/>
                {!this.state.isValid && <span>Some data are invalid</span>}
            </div>
        )
    }
}

export default RegistrationForm;