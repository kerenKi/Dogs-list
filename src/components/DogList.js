import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class DogList extends Component {

    render() {
        const {dogBreeds} = this.props
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {!dogBreeds && 'Loading...'}

                {dogBreeds && <ul>
                    {dogBreeds.map(breed => <li key={breed}>
                        <Link to={ `/dog-breeds/${breed}` }> {breed} </Link>
                        </li>)}
                </ul> }
            </div>
        );
    }
}




export default DogList;