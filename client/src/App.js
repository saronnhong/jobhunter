import React, { Component } from "react";
import Navbar from './components/Navbar';
import Search from './components/Search';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
