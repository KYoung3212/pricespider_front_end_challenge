import React, {Component} from 'react';
import Home from './home.js';
import '../assets/css/app.css';


class App extends Component {
    // Setup props even though not needed with this feature, if they are needed in later features
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
