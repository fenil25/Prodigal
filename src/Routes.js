import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Terms from './components/Terms';
import Policy from './components/Policy';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/about' component={AboutUs}/>
      <Route path="/terms&conditions" component={Terms}/>
      <Route path="/privacypolicy" component={Policy}/>
    </Switch>
  </main>
)

export default Routes;
