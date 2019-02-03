import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchFilters from './searchFilters/searchFilters';
import './searchInfo.css';

export default class SearchInfo extends Component {

    newPrintType(newPrint) {
        this.setState({
          printType: `&printType=${newPrint}`
        })
    }

    newBookType(newBook) {
        this.setState({
            bookType: newBook !== 'no-filter' ? `&filter=${newBook}` : ''
        })
    }

    newSearchTerm(newTerm) {
        this.setState({
          searchTerm: `q=${newTerm}`
        })
        this.props.newSearch(
            `q=${newTerm}`,
            this.state.bookType,
            this.state.printType
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'q=',
            bookType: '',
            printType: 'all'
        }
        this.newBookType = this.newBookType.bind(this);
        this.newPrintType = this.newPrintType.bind(this);
        this.newSearchTerm = this.newSearchTerm.bind(this);
    }

    render() {
        return (
            <div className="searchInfo">
                <SearchBar 
                    newSearchTerm={this.newSearchTerm} />
                <SearchFilters 
                    newPrintType={this.newPrintType}
                    newBookType={this.newBookType} />
            </div>
        )
    }
}