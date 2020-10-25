import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import DashboardPage from './pages/DashboardPage';
import DashboardPage2 from './pages/DashboardPage2';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/ds1" component={DashboardPage}/>
        <Route path="/ds2" component={DashboardPage2}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;