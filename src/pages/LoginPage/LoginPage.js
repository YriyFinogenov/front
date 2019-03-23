import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="LoginPageContainer">
                <LoginForm/>
            </div>
        )
    }
}

export  default LoginPage;