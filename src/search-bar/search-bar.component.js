// Styles
import './search-bar.styles.css';

const SearchBar = ({ searchChangeHandler, placeholder, classes }) => {
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