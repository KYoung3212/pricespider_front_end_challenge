import React, {Component} from 'react';
import listData from '../data/movieData';
import MovieTitle from './movieTitle';

class MovieList extends Component{
    constructor(props){{
        super(props);
    }}

    uneditableLink() {
        const lastMovie = listData[listData.length - 1];

        return (
            <li key={lastMovie._id} className="collection-item">{lastMovie.title}</li>
        )
    }

    render(){
        let movieListings = listData.slice(0, listData.length - 2);

        const listElements = movieListings.map((item, index) => {
            // return <li className = 'collection-item' key = {item._id}>{item.title}</li>  
            //     //added item id to get rid of 'key' error in console        
            // });
            return <MovieTitle key={item._id} item={item} />
        });

        listElements.push(this.uneditableLink());
        return (
                <ul className = "collection">{listElements}</ul>
        )
    }
}
export default MovieList;