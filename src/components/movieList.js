import React, {Component} from 'react';
import listData from '../data/movieData';
import MovieTitle from './movieTitle';
import { S_IXGRP } from 'constants';

class MovieList extends Component{
    constructor(props){{
        super(props);
    }}

    uneditableLink() {
        // Gets the last movie in the Array, which is Star Wars Episode IX to make it unclickable since it has not yet released
        const lastMovie = listData[listData.length - 1];

        return (
            // Displays the last movie (Episode IX) without the toggled class so that it can not be clicked/watched
            <li key={lastMovie._id} className="collection-item">{lastMovie.title}</li>
        )
    }

    render(){
        let movieListings = listData.slice(0, listData.length - 2);

        const listElements = movieListings.map((item, index) => {
            // Made sure to include item key for each movie to avoid console error
            return <MovieTitle key={item._id} item={item} />
        });
            // Adds Empisode IX to the end of the list without the 'toggled' class
        listElements.push(this.uneditableLink());
        return (
                <ol className = "collection">{listElements}</ol>
        )
    }
}
export default MovieList;