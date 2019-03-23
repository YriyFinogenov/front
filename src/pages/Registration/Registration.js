import React from 'react';
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import validator from 'validator';
import {LoginSchem} from '../../validators/ValidationSchems';



class Registration extends React.Component{
    constructor(props){
        super(props);
        this.registrationData={
            'email': '',
            'password': ''
        }
    }

    setValue=(target)=>{
        this.registrationData[target.name]=target.value;
    };



    checkValidInput=(name)=>{
        if(name==='email'){
            if(validator.isEmail(this.registrationData.email))
                return true;
            return false;
        }
        else if(name==='password'){
            if(this.registrationData.password.length===0)
                return false;
            return true;
        }
    };


    validateDataRegistration=()=>{
      return LoginSchem.isValid({email: this.registrationData.email, password: this.registrationData.password})
    };

    sendRequest=()=>{

    };


    render(){
        return(
            <div className="registrationPageContainer">
                <Input inputType='text' placeholder='input email' setValue={this.setValue} name='email' error='dd' checkValidInput={this.checkValidInput}/>
                <Input inputType='password' placeholder='input password' setValue={this.setValue} name='password' error='aa' checkValidInput={this.checkValidInput}/>
                <Submit validateData={this.validateDataRegistration} sendRequest={this.sendRequest}/>
            </div>
        )
    }
}

export default Registration;