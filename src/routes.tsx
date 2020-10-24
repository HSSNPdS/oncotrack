import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import DashboardPage from './pages/DashboardPage';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/ds1" component={DashboardPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;