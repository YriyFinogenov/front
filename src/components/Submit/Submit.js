import React from 'react';


class Submit extends React.Component{
    constructor(props){
        super(props);
    }


    clickHandler=()=>{
      if(this.props.validateData()){
          this.props.sendRequest();
      }
      return false;
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