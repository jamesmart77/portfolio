import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Nav from '../components/Nav';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import NoMatch from '../components/NoMatch';
import LoadingSpinner from '../components/LoadingSpinner';

export default function App () {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav/>
        { isLoading ? (
          <LoadingSpinner handleStopLoader={() => setIsLoading(false)}/>
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
