import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term : '',
        }
    }

    handleInputChange(e){
        
        this.setState({term: e.target.value});
        
    }

    render(){
        return(
            <input onChange={event => this.handleInputChange(event)} value={this.state.term}/>
        );
    }
}

export default SearchBar;