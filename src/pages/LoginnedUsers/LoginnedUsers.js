import React from 'react';
import {checkTokenAction} from "../../actions/actionCreator";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LoginnedUsers extends React.Component{
    constructor(props){
        super(props);
        this.hasValidToken=true;
        const accessToken=localStorage.getItem('accessToken');
        if(!accessToken){
            this.hasValidToken=false;
        }
        else{
            this.props.dispatchCheckToken(accessToken);
        }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.error){
            this.hasValidToken=false;
        }
    }

    render(){
        if(!this.hasValidToken){
            return <Redirect to='/login'/>
        }
        return(
            <span>HELLO</span>
        )
    }
}


const mapStateToProps=(state)=>{
    return state.checkToken;
};

const mapDispatchToProps=(dispatch)=>(
    {dispatchCheckToken: (data)=>dispatch(checkTokenAction(data))}
);

export default connect(mapStateToProps,mapDispatchToProps)(LoginnedUsers);