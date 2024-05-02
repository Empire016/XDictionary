import React, { useState } from "react";
import "./App.css";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    const foundWord = dictionary.find((wordObj) =>
      wordObj.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord);
    } else {
      setResult({ word: "Not found", meaning: "Word not found in the dictionary." });
    }
  };

  return (
    <div className="App">
      <h1>XDictionary</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          className="search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word..."
        />
        <button type="submit">Search</button>
      </form>
      {result.word && (
        <div>
          <h2>{result.word}</h2>
          <p>{result.meaning}</p>
        </div>
      )}
    </div>
  );
}

export default App;