import React from 'react';
import './printType.css';

export default function PrintType(props) {

    return (
        <div className="printType">
            <label htmlFor="bookOptions">Print Type</label>
            <select onChange={(e)=>props.newPrintType(e.target.value)}>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
        </div>
    )
}
