import React from 'react';
import axios from 'axios';
import UserDetails from './userdetail';

class RemoteAPIData extends React.Component {

constructor(props){

super(props)

    this.state= {
        users: []

    
}
}
    getRemoteData(){
axios.get("https://jsonplaceholder.typicode.com/users")
.then((received)=>{

//console.log(received.data)
this.setState({users:received.data})
console.log(this.state.users)

})
        
    }
    componentWillMount(){
        this.getRemoteData()
    }
    renderUserDetail(){
return this.state.users.map((user)=>{

            return (<UserDetails
                key={user.id}
                myname={user.name}
                myemail={user.email}
            ></UserDetails>
            )
        })
    }

    render() { 
        return ( 
    <div> Getting data...
        <ol>
        {this.renderUserDetail()}
        </ol>
        </div>
         );
    }
}
 
export default RemoteAPIData;