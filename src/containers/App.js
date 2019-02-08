import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import NoMatch from '../components/NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Nav/>
          <Switch>
            <Route exact path='/' component={Portfolio} />
            <Route path='/aboutme' component={AboutMe} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
