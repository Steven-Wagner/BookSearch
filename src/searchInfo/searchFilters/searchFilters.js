import React from 'react';
import PrintType from './printType';
import BookType from './bookType';
import './searchFilters.css';

export default function SearchFilters (props) {
    return (
        <div className="searchFilters">
            <PrintType newPrintType={props.newPrintType} />
            <BookType newBookType={props.newBookType} />
        </div>
    )
}
