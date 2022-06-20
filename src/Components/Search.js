import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const [inputValue, setInputValue] = useState("");

  function handleSearchInput(e) {
    setInputValue("");
  }
  return (
    <div className="container">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search meal by name"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Link
          to={`/search/meal/${inputValue}`}
          className="btn"
          onClick={handleSearchInput}
        >
          Search
        </Link>
      </div>
    </div>
  );
}

export default Search;
