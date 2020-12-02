import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './../components/home';

import { OAuthRoute } from './oauth';
import { CloneRoute } from './clone';

export const Routes = () => {
  // localStorage.clear();
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={() => {
            return <Home />;
          }}
        />

        <Route path="/oauth" component={OAuthRoute} />
        <Route path="/clone" component={CloneRoute} />
      </Switch>
    </BrowserRouter>
  )
}
