import React, { Component } from 'react';
import { Container } from 'react-materialize';
import Nav from '../components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Container>
        </Container>
      </div>
    );
  }
}

export default App;
