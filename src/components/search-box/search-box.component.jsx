import './search-box.styles.css';
import React from 'react';


//This is functional component to render only part of the app. 
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
  />
)