import React from 'react';
import { Route, RouteComponentProps } from 'react-router';

import { ProfileRoute } from './profile';
import { ThingsRoute } from './things';
import { Authentication } from './../../../components';

export const AppRoute = (props: RouteComponentProps) => {
  const { match } = props;

  const accessToken = localStorage.getItem(`homelabprojects.access_token`);
  const refreshToken = localStorage.getItem(`homelabprojects.refresh_token`);

  return (
    <Authentication
      clientID={process.env.REACT_APP_CLIENT_ID}
      clientSecret={process.env.REACT_APP_CLIENT_SECRET}
      accessToken={accessToken}
      refreshToken={refreshToken}
    >
      <div>
        <Route
          path={`${match.path}/profile`}
          component={ProfileRoute}
        />
        <Route
          path={`${match.path}/things`}
          component={ThingsRoute}
        />
      </div>
    </Authentication>
  )
}
