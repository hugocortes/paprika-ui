import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import { Login } from './../../components/login'
import { Callback } from './../../components/callback'

export const OAuthRoute = (props: RouteComponentProps) => {
  const { match } = props;

  return (
    <div>
      <Route
        path={`${match.path}/login`}
        component={Login}
      />

      <Route
        path={`${match.path}/callback`}
        component={Callback}
      />
    </div>
  )
}
