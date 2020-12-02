import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import { AppRoute } from './app';
import { PublicRoute } from './public';

export const CloneRoute = (props: RouteComponentProps) => {
  const { match } = props;

  return (
    <div>
      <Route
        path={`${match.path}/public`}
        component={PublicRoute}
      />

      <Route
        path={`${match.path}/app`}
        component={AppRoute}
      />
    </div>
  )
}
