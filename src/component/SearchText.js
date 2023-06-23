import React from 'react';

const SearchText = ({value, handleOnChange}) => {
    return (
        <input 
            type="text" 
            value={value}
            placeholder='Searching...'
            onChange={handleOnChange}
        />
    );
}

export default SearchText;