import React, { Component } from 'react';
import * as request from 'superagent'
import DogList from './DogList'

class DogListContainer extends Component {
    state = {
        dogBreeds: null
    }

    updateBreeds(breeds){
        this.setState({
            dogBreeds : breeds
        });
    }

    componentDidMount(){
        request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => this.updateBreeds(Object.keys(response.body.message)))
      .catch(console.error)
    }
    
    render() {
        return (
            <div>
                <DogList dogBreeds={this.state.dogBreeds}/>
            </div>
        );
    }
}

export default DogListContainer;