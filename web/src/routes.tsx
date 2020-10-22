import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Login from './pages/Dashboard/Login/Login';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import ForgotPassword from './pages/Dashboard/Login/ForgotPassword';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;