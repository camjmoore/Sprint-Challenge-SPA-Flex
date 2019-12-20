import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor = "name">Search</label>
          <input 
            id = "name"
            type = "text"
            name = "searchbar"
            placeholder = "Who's a terry-fold?"
            onChange = {(e) => {
              e.preventDefault();
              props.search(e.target.value)
              }}
          />
      </form>
    </section>
  );
}
