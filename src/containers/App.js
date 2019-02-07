import React, { Component } from 'react';
import { Container } from 'react-materialize';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Banner />
        <Container>
        </Container>
      </div>
    );
  }
}

export default App;
