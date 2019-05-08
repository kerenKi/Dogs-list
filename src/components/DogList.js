import React, { Component } from 'react';

class DogList extends Component {

    render() {
        const {dogBreeds} = this.props
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {!dogBreeds && 'Loading...'}

                {dogBreeds && <ul>
                    {dogBreeds.map(breed => <li key={breed}>{breed}</li>)}
                </ul> }
            </div>
        );
    }
}




export default DogList;