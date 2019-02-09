import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import NoMatch from '../components/NoMatch';
import LoadingSpinner from '../components/LoadingSpinner';

class App extends Component {

  constructor(props){
    super(props);
    this.handleStopLoader = this.handleStopLoader.bind(this);
    this.state = {
      loading: true,
      firstTimeLoad: true
    }
  }

  handleStopLoader(){
    this.setState({loading: false})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Nav/>
          { this.state.loading ? (
            <LoadingSpinner handleStopLoader={this.handleStopLoader}/>
          ) : (
          <Switch>
            <Route exact path='/' component={Portfolio} />
            <Route path='/aboutme' component={AboutMe} />
            <Route component={NoMatch} />
          </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
