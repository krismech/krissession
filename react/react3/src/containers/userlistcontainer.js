import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import clickUserAction from '../actions/userclickactions';


class UserListContainer extends React.Component {

    renderThePropsIReceived() {
        console.log("I have received users from store as props whose name is myusers");
        console.log(this.props.myusers);
        return this.props.myusers.map((u) => {

            return (
                <li key={u.id}
                    onClick={() =>this.props.clickUserProp(u)}
                >
                    {u.first} {u.last}
                </li>
            )
        }

        )

    }


    render() {
        return (

            <div> {this.renderThePropsIReceived()} </div>
        );
    }
}

function convertStoreToProps_custom(store) {
    console.log(store)
    return {
        myusers: store.users
    }
}


function mapPropsToActionsAndDispatchThem(dispatch) {
    return bindActionCreators({
        clickUserProp: clickUserAction

 }, dispatch)

}

export default connect(convertStoreToProps_custom, mapPropsToActionsAndDispatchThem)(UserListContainer);