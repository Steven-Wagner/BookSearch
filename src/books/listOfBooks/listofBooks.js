import React, { Component } from 'react';
import './listOfBooks.css';
//import BookInfo from './bookInfo/bookInfo';

function BookInfo(props) {
    console.log('making a card for book info', props.book);

  const bookData = props.book.volumeInfo;
  const bookThumbnail = bookData.imageLinks 
    ? <img className="thumbnail" src={bookData.imageLinks.smallThumbnail} alt={bookData.title}/>
    : (<div className="thumbnail no-picture">
            <p>No Picture</p>
        </div>)
                                            
  return (
      <li>
          <header>
              <h2>{bookData.title}</h2>
              <h3>{bookData.subtitle ? bookData.subtitle : ''}</h3>
          </header>
          <div className="bookContent">
            {bookThumbnail}
            <div className="bookInfo">
                <p className="author-Price">
                    Author: {bookData.authors ? bookData.authors.join(', ') : 'N/A'}<br /> 
                    Price:  {props.book.saleInfo.listPrice ? props.book.saleInfo.listPrice.amount : 'free'}
                </p>
                <p>{bookData.description ? bookData.description.split('.')[0] : ''}</p>
            </div>
          </div>
      </li>

  );
}

export default function ListOfBooks(props) {

    const bookCards = props.currentBooks.map((book, i) => {
        console.log('building bookinfo for', book);
        return <BookInfo book={book} key={i} />
    })
    
    return (
        <ul className="listOfBooks">
            {bookCards}
        </ul>
    );
  }



