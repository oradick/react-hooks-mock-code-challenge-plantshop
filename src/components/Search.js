import React, {useState} from "react";

function Search({searchTerm, setSearchTerm}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
