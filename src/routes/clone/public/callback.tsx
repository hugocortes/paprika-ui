import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Callback } from './../../../components';

export const CallbackRoute = (props: RouteComponentProps) => {
  const { location: { search } } = props;

  const query = new URLSearchParams(search);
  const code = query.get('code')!;
  const state = query.get('state')!;
  const callbackProps = {
    clientID: process.env.REACT_APP_CLIENT_ID!,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
    code,
    redirectURI: `${process.env.REACT_APP_WEB_URL}/clone/public/callback`,
    tokenURI: `${process.env.REACT_APP_IOTINABOX_API_URL}/v1.0/oauth/token`,
  };

  const isInvalidRedirect = Object.values(callbackProps).some(val => !val);
  if (isInvalidRedirect) {
    // TODO redirect to home
    console.log('invalid value');
  }

  return (
    <Callback {...callbackProps} />
  )
};
