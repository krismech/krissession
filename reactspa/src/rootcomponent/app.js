import React from 'react';

import Content from '../spa/content/content';
import Menu from '../spa/menu/menu';


class App extends React.Component {

    render() {
        return (
            <div>
                <div><Menu></Menu></div> 
<div className="content"><Content></Content></div> 
 

            </div>

        );
    }
}

export default App;