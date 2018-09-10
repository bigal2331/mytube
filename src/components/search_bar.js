import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term : '',
        }
    }

    handleInputChange(term){
        
        this.setState({term});
        this.props.onSearchTermChange(term)
        
        
    }

    render(){
        return(
            <div className="search-bar">
                <input onChange={event => this.handleInputChange(event.target.value)} value={this.state.term}/>
            </div>            
        );
    }
}

export default SearchBar;