import React, { useEffect } from 'react';

type CallbackProps = {
  clientID: string,
  clientSecret: string, // TODO use a public client
  code: string,
  redirectURI: string,
  tokenURI: string
};

export const Callback = (props: CallbackProps) => {
  useEffect(() => {
    (async () => {
      const { clientID, clientSecret, code, redirectURI, tokenURI } = props;

      const payload = {
        grant_type: 'authorization_code',

        client_id: clientID,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectURI
      };

      let res = await fetch(tokenURI, {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      const jwt = await res.json();
      localStorage.setItem(`${clientID}.access_token`, jwt.access_token);
      localStorage.setItem(`${clientID}.refresh_token`, jwt.refresh_token);
    })();
  })

  return <div></div>;
};
