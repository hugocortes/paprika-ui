import React from 'react';

import { Card, Button } from '@material-ui/core'
import styled from '@emotion/styled'

const StyledCard = styled(Card)`
  padding: 20px 20px 20px 20px;
  margin: 100px auto;
  max-width: 40vw;
  min-width: 300px;
`;

type LoginProps = {
  authURI: string
  clientID: string
  redirectURI: string
  scope: string
  state: string
};

export const Login = (props: LoginProps) => {
  const handleRedirect = () => {
    const query = new URLSearchParams();
    query.append('client_id', props.clientID);
    query.append('redirect_uri', props.redirectURI);
    query.append('scope', props.scope);
    query.append('state', props.state);

    const url = `${props.authURI}?${query.toString()}`;
    window.location.assign(url);
  };

  return (
    <div>
      <StyledCard>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRedirect}
        >
          Redirect to login...
        </Button>
      </StyledCard>
      <a href="/">
        {'< Go back home'}
      </a>
    </div>
  )
};
