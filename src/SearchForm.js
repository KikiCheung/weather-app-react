import React from "react";

export default function SearchForm() {
  return (
    <form>
      <div className="form-row">
        <div className="col-8">
          <input
            className="form-control"
            type="search"
            placeholder="Enter a city"
            autoFocus
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        <div className="col-2">
          <button className="btn btn-info">Current</button>
        </div>
      </div>
    </form>
  );
}
