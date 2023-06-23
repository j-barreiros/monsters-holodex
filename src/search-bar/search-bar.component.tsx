// Styles
import React from 'react';
import './search-bar.styles.css';

type SearchBoxProps = {
    classes: string;
    placeholder?: string;
    searchChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ searchChangeHandler, placeholder, classes }: SearchBoxProps) => {
    return (
        <input
            className={`search-box ${classes}`}
            type="search"
            placeholder={placeholder}
            onChange={searchChangeHandler}
        />
    )
}


export default SearchBar;