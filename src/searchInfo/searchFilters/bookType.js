import React from 'react';
import './bookType.css';

export default function BookType (props) {

    return (
        <div className="bookType">
            <label htmlFor="bookOptions">Book Type:</label>
            <select id="bookOptions" name="bookOptions" onChange={(e)=>props.newBookType(e.target.value)}>
                <option value="no-filter">No Filter</option>
                <option value="ebooks">Ebooks</option>
                <option value="full">Full content available</option>
                <option value="free-ebooks">Free-ebooks</option>
                <option value="paid-ebooks">Paid-ebooks</option>
            </select>
        </div>
    )
}