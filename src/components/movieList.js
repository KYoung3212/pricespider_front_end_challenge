import React, {Component} from 'react';
import listData from '../data/movieData';

class MovieList extends Component{
    constructor(props){{
        super(props);
    }}
    render(){
        const listElements = listData.map((item, index) => {
            return <li className = 'collection-item' key = {item._id}>{item.title}</li>  
                //added item id to get rid of 'key' error in console        
            });
        return (
                <ul className = "collection">{listElements}</ul>
        )
    }
}
export default MovieList;