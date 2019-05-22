import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.setFilterState(event.target.value)
  }
  
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === "name"} onChange={() => props.setSortState("name")}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "price"} onChange={() => props.setSortState("price")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange} value={props.filter}>
          <option value={null}></option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
