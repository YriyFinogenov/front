import React from 'react';
import './ChoseRole.sass';

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
            <div className="choseRoleContainer">
                    <div onClick={this.changeRole} className="choseRole">
                        <input type="checkbox" checked={this.state.isBuyer}/>
                        <div className="infoRoleContainer">
                            <span className='roleR'>Join As a Buyer </span>
                            <span className='roleInfo'>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                        </div>
                    </div>
                    <div onClick={this.changeRole} className="choseRole">
                        <input type="checkbox" checked={this.state.isCreator} />
                        <div className="infoRoleContainer">
                            <span className='roleR'>Join As a Creative </span>
                            <span className='roleInfo'>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ChoseRole;