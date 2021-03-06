import React from 'react';
import './Input.sass';

class Input  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: '',
            isValid: true
        };
    }

    blurHandler=()=>{
        if(!this.props.checkValidInput(this.props.name)){
            this.setState({
               isValid: false
            });
        }
        else{
            this.setState({
               isValid: true
            });
        }
    };

    changeValue=(event)=>{
        this.setState({
            value: event.target.value
        });
        this.props.setValue(event.target);
    };

    render(){
        let additionalClassName='';
        if(!this.state.isValid){
            additionalClassName ='invalidInput';
        }
        return(
            <div className="inputContainer">
                <input className={'inputR'+ ' '+ additionalClassName} type={this.props.inputType} placeholder={this.props.placeholder} value={this.state.value} onChange={this.changeValue} name={this.props.name} onBlur={this.blurHandler}></input>
                {!this.state.isValid && <span>{this.props.error}</span>}
            </div>
        )
    }
}

export default Input;