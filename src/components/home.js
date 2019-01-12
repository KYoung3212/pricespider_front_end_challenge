import React, {Component} from 'react';
import MovieList from './movieList';

class Home extends Component {

    render(){
        return(
            <div>
                <div className="titles">
                    <h1>Star Wars Movie List</h1>
                    <h3>Mark as Watched with a click</h3>
                </div>
                <MovieList/>
            </div>
        )
    }
}

export default Home;