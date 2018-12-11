import React from 'react';
import { connect } from 'react-redux';

class UserDetailContainer extends React.Component {
    render() { 
        if(this.props.activeUser===null){
        return (<div>"Click name to see details...."</div>)
        }
        else{
        return ( <div>
        User Details of the container!!
        <br></br>
        Name: {this.props.activeUser.first}{this.props.activeUser.last} 
        at {this.props.activeUser.age} says
        <br></br>
        <b> {this.props.activeUser.description}</b>
        </div> );
        }
        } 
}

function convertStoreToProps(store){
return{
activeUser:store.clickeduser
}
}
export default connect(convertStoreToProps)(UserDetailContainer) ; 