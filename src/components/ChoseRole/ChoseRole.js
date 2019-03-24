import React from 'react';


class ChoseRole extends React.Component{
    constructor(props){
        super(props);
        this.state={
          isBuyer: true,
          isCreator: false
        };
    }

    changeRole=()=>{
      this.setState({
         isBuyer: !this.state.isBuyer,
         isCreator: !this.state.isCreator
      });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.isBuyer){
            this.props.setValue({name: this.props.name, value: 'customer'});
        }
        else{
            this.props.setValue({name: this.props.name, value: 'creator'});
        }
    }

    render(){
        return(
            <div className="choseRole">
                <div onClick={this.changeRole}>
                    <input type="checkbox" checked={this.state.isBuyer}/>
                    <span>Join As a Buyer </span>
                </div>
                <div onClick={this.changeRole}>
                    <input type="checkbox" checked={this.state.isCreator} />
                    <span>Join As a Creative </span>
                </div>
            </div>
        )
    }
}

export default ChoseRole;