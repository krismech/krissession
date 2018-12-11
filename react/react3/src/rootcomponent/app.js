import React from 'react';
import MainComponent from '../components/maincomponent';

class App extends React.Component {
    state = {  }
    render() { 
        return (
            <div>

                Hello Redux
                <MainComponent></MainComponent>
            </div>

         );
    }
}
 
export default App;