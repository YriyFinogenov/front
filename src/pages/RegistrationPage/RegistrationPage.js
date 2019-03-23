import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

class RegistrationPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="registrationPageContainer">
                <RegistrationForm/>
            </div>
        )
    }
}

export default RegistrationPage;