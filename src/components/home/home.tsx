import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { Card, Button } from '@material-ui/core'
import styled from '@emotion/styled'

const StyledCard = styled(Card)`
  padding: 20px 20px 0px 20px;
  margin: 100px auto;
  max-width: 40vw;
  min-width: 300px;
  Button {
    margin-bottom: 20px;
  }
`;

type HomeProps = {
  // setApplication: (application: string) => void
}

export const Home = (props: HomeProps) => {
  const [redirectTo, setRedirectTo] = useState('');

  const cloneBasePath = '/clone/public';
  const fleetBasePath = '/fleet/public';

  const handleOnClick = (redirectPath: string) => {
    setRedirectTo(redirectPath);
  };

  const shouldRedirect = !!redirectTo;
  if (shouldRedirect) {
    return <Redirect push to={redirectTo} />;
  }

  return (
    <StyledCard>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOnClick.bind(this, cloneBasePath)}
      >
        Go to IoT in a Box clone application.
      </Button>
      <br></br>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOnClick.bind(this, fleetBasePath)}
      >
        Go to IoT Fleet application.
      </Button>
    </StyledCard>
  )
}
