import React, { Component } from 'react';


class MovieTitle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggled: false
            // Toggled State starts as false and is changed to true on click
        }
    }

    toggleLink = () => {
        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        const { title } = this.props.item;
        const { toggled } = this.state;

        return (
            //Adds the toggled class if the individual movie item has the toggled state set to 'true'
            <li className={ `${toggled ? 'toggled' : ''} collection-item` } onClick={this.toggleLink} >{title}</li>
        )
    }
}

export default MovieTitle;
