import React from 'react';



class LoginInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        };
    }

    changeValue=(event)=>{
        this.setState({
            value: event.target.value
        });
        this.props.setValue(event.target);
    };

    render(){
        return(
            <div className="inputLoginContainer">
                <input type={this.props.inputType} placeholder={this.props.placeholder} value={this.state.value} onChange={this.changeValue} name={this.props.name}></input>
            </div>
        )
    }
}

export default LoginInput;