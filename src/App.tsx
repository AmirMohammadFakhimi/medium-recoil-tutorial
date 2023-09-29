import React from 'react';
import './App.css';
import {SearchInput} from "./components/searchInput/SearchInput";
import {SearchResult} from "./components/searchResult/SearchResult";

function App() {
  return (
    <div className="App">
      <SearchInput/>
      <SearchResult/>
    </div>
  )
}

export default App;
