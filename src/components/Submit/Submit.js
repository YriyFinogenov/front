import React from 'react';


class Submit extends React.Component{
    constructor(props){
        super(props);
    }


    clickHandler=()=>{
      this.props.validateData()
          .then(()=>this.props.sendRequest())
          .catch(()=>console.log('some data invalid'));
    };

    render(){
        return(
            <div className="submitContainer" onClick={this.clickHandler}>
                Send Data
            </div>
        )
    }
}

export default Submit;