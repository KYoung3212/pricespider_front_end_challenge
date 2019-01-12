import React, { Component } from 'react';


class MovieTitle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggled: false
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
            <li className={ `${toggled ? 'toggled' : ''} collection-item` } onClick={this.toggleLink} >{title}</li>
        )
    }
}

export default MovieTitle;
