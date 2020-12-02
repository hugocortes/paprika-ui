import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';

import { CallbackRoute } from './callback';

import { Login } from './../../../components'

export const About = () => {
  return (
    <div>
      This is a clone of IoTinaBox.
    </div>
  )
};

interface AboutIDParams {
  id: string;
};

export const AboutID = (props: RouteComponentProps<AboutIDParams>) => {
  const { match } = props;

  return (
    <div>
      This is the AboutID: {`${match.params.id}`}
    </div>
  )
};

export const PublicRoute = (props: RouteComponentProps) => {
  const { match } = props;

  const loginProps = {
    authURI: `${process.env.REACT_APP_IOTINABOX_API_URL}/v1.0/oauth/auth`,
    clientID: 'homelabprojects',
    redirectURI: `${process.env.REACT_APP_WEB_URL}/clone/public/callback`,
    scope: 'openid',
    state: 'tmp'
  };

  return (
    <div>
      <Route
        exact path={`${match.path}`}
        component={() => {
          return <Login {...loginProps} />
        }}
      />

      <Route
        exact path={`${match.path}/about`}
        component={About}
      />
      <Route
        exact path={`${match.path}/about/:id`}
        component={AboutID}
      />
      <Route
        exact path={`${match.path}/callback`}
        component={CallbackRoute}
      />
    </div>
  )
};
