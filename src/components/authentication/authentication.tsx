import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

type AuthenticationProps = {
  children: JSX.Element,
  clientID: string | undefined,
  clientSecret: string | undefined,
  accessToken: string | null,
  refreshToken: string | null
}

export const Authentication = (props: AuthenticationProps) => {
  const { accessToken, clientID, clientSecret } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const payload = {
        token: accessToken,
        client_id: clientID,
        client_secret: clientSecret
      };
      const url = `${process.env.REACT_APP_IOTINABOX_API_URL}/v1.0/oauth/introspect`;

      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const { active } = await res.json();

      setIsAuthenticated(active);
      setIsLoading(false);
    })();
  });

  if (isLoading) {
    return (
      <div>
        Fetching...
      </div>
    )
  }
  if (!isAuthenticated) {
    return <Redirect push to="/" />;
  }

  return props.children;
}
