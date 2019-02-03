import React, { Component } from 'react';
import './searchBar.css';

export default class SearchBar extends Component {

    changeSearchTerm(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchTermSubmit(e) {
        e.preventDefault();
        if (this.state.searchTerm !== '') {
            this.props.newSearchTerm(this.state.searchTerm);
        }
        else {
            alert('Please enter a search term');
        }
    }

    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return (
            <form className="searchBar">
                <label htmlFor="searchTerm">Search:</label>
                <input type="text" id="searchTerm" onChange={(e)=>this.changeSearchTerm(e)} />
                <button className="submit-button" type="submit" onClick={(e)=>this.searchTermSubmit(e)}>Search</button>
            </form>
        )
    }
}