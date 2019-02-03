import React, { Component } from 'react';
import './App.css';
import SearchInfo from './searchInfo/searchInfo';
import ListOfBooks from './books/listOfBooks/listofBooks';

export default class App extends Component {

  newSearch(term, book, print) {
    this.setState({
      searchTerm: term,
      bookType: book,
      printType: print
    })
  }

  constructor(props) {
    super(props);
    this.state= {
      currentBooks: this.props.booksData,
      searchTerm: 'q=flowers',
      bookType: '',
      printType: '&printType=all'
    }
    this.newSearch = this.newSearch.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update ran');
    if (prevState.searchTerm !== this.state.searchTerm || prevState.bookType !== this.state.bookType || prevState.printType !== this.state.printType) {
      const urlToGetBookData = `https://www.googleapis.com/books/v1/volumes?${this.state.searchTerm}${this.state.printType}${this.state.bookType}&key=AIzaSyDDwj1IU1Tyxthw5Y1kkKID2H6Y2Mqs6DA`;

      fetch(urlToGetBookData)
        .then(bookDataResponse => {
          if (!bookDataResponse.ok) {
            throw new Error('Somehthing went wrong with fetching from googlebooksapi')
          }
          return bookDataResponse.json();
        })
        .then(jBookResponse => {
          if (jBookResponse.items) {
            this.setState({
              currentBooks: jBookResponse.items
            })
            console.log('this is the new state of currentBooks', this.state.currentBooks);
          }
          else {
            alert('No Results Found');
          }
        })
        .catch(err => {
          console.log(err.message);
        })
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchInfo 
          newSearch={this.newSearch} />
        <ListOfBooks 
          currentBooks={this.state.currentBooks}/>
      </div>
    );
  }
}
