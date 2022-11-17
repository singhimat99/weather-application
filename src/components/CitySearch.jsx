import React, { useRef, useState } from "react";

export default function CitySearch({ showSidebar, toggleVisibility }) {
  return (
    <div
      className={showSidebar ? "search-container active" : "search-container"}
    >
      <div className="search-form-container">
        <form>
          <input type="text" placeholder="search for a city..." />
          <button>Search</button>
        </form>
      </div>
      <div className="results-container">
        <div onClick={toggleVisibility}>London</div>
        <div>London</div>
      </div>
      <button onClick={toggleVisibility} className="x-btn">
        X
      </button>
    </div>
  );
}
