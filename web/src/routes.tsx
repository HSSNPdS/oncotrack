import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import infoMap from './pages/infoMap';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={infoMap}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;