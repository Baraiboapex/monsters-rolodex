import React from 'react';
import './search-bar.styles.css';

export const SearchBar=({placeholder, handleChange})=>(<input 
    type="search" 
    placeholder={placeholder} 
    onChange={handleChange}
    className="search"
/>);