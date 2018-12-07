import React from 'react';

class Son extends React.Component{

    render() {

        return(

            <div>
                <i> I am Son.  My name is {this.props.name}</i>
            </div>
        )
    }
}

export default Son