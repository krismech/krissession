import React from 'react';
import UserListContainer from '../containers/userlistcontainer';
import UserDetailContainer from '../containers/userdetailcontainer';

class MainComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>User List:
                    <UserListContainer></UserListContainer>
                </div>
                <hr></hr>
                <div>User Details(of the name clicked in list)</div>
                <UserDetailContainer></UserDetailContainer>          
                 </div>

        );
    }
}

export default MainComponent;