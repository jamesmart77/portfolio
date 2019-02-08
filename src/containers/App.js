import React, { Component } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav/>
        <Banner />
        <Portfolio />
      </div>
    );
  }
}

export default App;
