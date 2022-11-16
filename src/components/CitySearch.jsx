import React from "react";

export default function CitySearch() {
  return (
    <div className="search-container">
      <div className="search-form-container">
        <form>
          <input type="text" placeholder="search for a city..." />
          <button>Search</button>
        </form>
      </div>
      <div className="results-container">
        <p>London</p>
        <p>London</p>
      </div>
    </div>
  );
}
