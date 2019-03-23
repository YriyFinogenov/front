import React from 'react';
import Input from '../Input/Input';
import Submit from '../Submit/Submit';
import validator from 'validator';
import Schem from '../../validators/ValidationSchems';



class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
          isValid: true
        };
        this.loginData={
            'email': '',
            'password': ''
        }
    }

    setValue=(target)=>{
        this.loginData[target.name]=target.value;
    };



    checkValidInput=(name)=>{
        this.setValidationStatus(true);
        if(name==='email'){
            if(validator.isEmail(this.loginData.email))
                return true;
            return false;
        }
        else if(name==='password'){
            if(this.loginData.password.length===0)
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
      return Schem.LoginSchem.isValid({email: this.loginData.email, password: this.loginData.password})
    };

    sendRequest=()=>{
        console.log('send request');
    };


    render(){
        return(
            <div className="LoginFormContainer">
                <Input inputType='text' placeholder='input email' setValue={this.setValue} name='email' error='' checkValidInput={this.checkValidInput}/>
                <Input inputType='password' placeholder='input password' setValue={this.setValue} name='password' error='' checkValidInput={this.checkValidInput}/>
                <Submit validateData={this.validateDataRegistration} sendRequest={this.sendRequest} setValidationStatus={this.setValidationStatus}/>
                {!this.state.isValid && <span>Some data are invalid</span>}
            </div>
        )
    }
}

export default LoginForm;