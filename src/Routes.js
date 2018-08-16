import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';
import AboutUs from './components/AboutUs/AboutUs';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/about' component={AboutUs}/>
    </Switch>
  </main>
)

export default Routes;
