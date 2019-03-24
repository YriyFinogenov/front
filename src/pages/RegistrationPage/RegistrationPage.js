import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationPage.sass';
import {Link} from 'react-router-dom';

class RegistrationPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="mainContainerRegistrationPage">
                <div className="signupContainer">
                    <div className='logoContainerRegistrationPage'>
                        <img src="./images/logo.png" alt="logo"></img>
                        <div className='toLoginPageButton'>
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                    <RegistrationForm/>
                </div>
            </div>
        )
    }
}

export default RegistrationPage;