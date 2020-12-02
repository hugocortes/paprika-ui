import React from 'react';
import { Route, RouteComponentProps } from 'react-router';

export const ThingsRoute = (props: RouteComponentProps) => {
  const { match } = props;

  return (
    <div>
      Things
    </div>
  )
}
