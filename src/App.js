import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Prompts from './Prompts.js';
import Results from './Results.js';

class App extends Component {

  render() {
    return(
      <div className="App">
        <Route exact path ="/" component={Prompts} />
      </div>
    )
  }
}

export default App;