import React from 'react';

class UserDetails extends React.Component {
  
    render() { 
        return ( 
          
           <li> {this.props.myname} at {this.props.myemail} </li>
           
         );
    }
}
 
export default UserDetails;