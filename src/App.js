import React, { useState } from "react";
import "./App.css";

const dictionary = {
  React: "A JavaScript library for building user interfaces.",
  Component: "A reusable building block in React.",
  State: "An object that stores data for a component."
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    if (term in dictionary) {
      setDefinition(dictionary[term]);
    } else {
      setDefinition(`Word not found in the dictionary: ${searchTerm}`);
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word..."
          data-cy="search-input" // Added data-cy attribute
        />
        <button type="submit" data-cy="search-button">Search</button> {/* Added data-cy attribute */}
      </form>
      <p className="definition" data-cy="definition"> {/* Changed id to class */}
        {definition && `Definition: ${definition}`}
      </p>
    </div>
  );
}

export default App;
