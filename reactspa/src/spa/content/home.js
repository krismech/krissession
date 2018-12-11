import React from 'react';
import { CSSTransition } from "react-transition-group";

class Home extends React.Component {

    render() {
        return (
            <CSSTransition 
            in={true}
            appear={true}
            timeout={1000}
            classNames= "fade"
            enter={false}
            transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
            >
        
        <div>
            Homepage is here 
        </div>
        </CSSTransition>

        );
    }
}

export default Home;