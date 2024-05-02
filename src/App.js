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
    if (searchTerm in dictionary) {
      setDefinition(dictionary[searchTerm]);
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
        />
        <button type="submit">Search</button>
      </form>
      {definition && <p id="definition">Definition: {definition}</p>}
    </div>
  );
}

export default App;