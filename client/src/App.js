import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper light-blue darken-3">
            <a href="#" class="brand-logo center "><i class="material-icons">face</i>Kraven's Last Hunt</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <nav class="container searchBar">
          <div class="nav-wrapper">
            <form>
              <div class="input-field white">
                <input id="search" type="search" required />
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </nav>

      </div>
    );
  }
}

export default App;
