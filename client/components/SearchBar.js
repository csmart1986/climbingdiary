// create SearchBar functional component
import React from 'react';

// pass location and setLocation as props from parent component, HomePage
    // location => assigned value of input location
    // setLocation => fx that handles the change event of location being entered into search bar
const SearchBar = ({location, updateLocation}) => {
  
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <div>
      <input 
      style={BarStyling}
      value={location}
      placeholder={"enter city"}
      //  when input changes in searchbar, update search location with new input
      onChange={(e) => updateLocation(e.target.value)}
      />
      <button className='search' type='submit'>
        Search
      </button>
  </div>
    
  );
}

export default SearchBar