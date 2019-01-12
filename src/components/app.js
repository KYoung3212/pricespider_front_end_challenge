import React, {Component} from 'react';
import Home from './home.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    };
    render(){
        return (
            <div className = 'container'>
                <Home/>
            </div>
        );
    }
}

export default App;
