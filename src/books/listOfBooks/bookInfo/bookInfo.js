import React, { Component } from 'react';
import './bookInfo.css';

export default class BookInfo extends Component {
  render() {
      console.log('making a card for book info', this.props.book);

    const bookData = this.props.book.volumeInfo;

    const subtitle = bookData.subtitle ? bookData.subtitle : '';
    const authors = bookData.authors.join(', ') //Do I need this?
    const price = this.props.book.saleInfo.listPrice.amount ? this.props.book.saleInfo.listPrice.amount : 'free';
    const description = bookData.description.split('.')[0];

    // may have to add a key
    return (
        <li>
            <header>
                <h2>{this.props.book.volumeInfo.title}</h2>
                <h3>{subtitle}</h3>
            </header>
            <div>
                <img src={bookData.imageLinks.smallThumbnail}
                    alt={bookData.title} />
                <p className="author-Price">
                    Author: {authors}<br /> 
                    Price: {price}
                </p>
                <p>{description}</p>
            </div>
        </li>

    );
  }
}