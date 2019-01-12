import React, {Component} from 'react';
import MovieList from './movieList';

class Home extends Component {

    render(){
        return(
            <div>
                <h1 className ='center'>Star Wars Movie List</h1>
                <h3 className ='center'>Mark as Watched with a click</h3>
                <MovieList/>
            </div>
        )
    }
}

export default Home;