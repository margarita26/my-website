import styled from '@emotion/styled';
import { createBrowserHistory as history } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { BarNavigation, Routes, SocialMediaBar } from '../../components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 90%;
`;

const StyledRouter = styled(Router)`
  padding: 8px;
`;

const browserHistory = history();

export const LandingPage: React.FC = () => {
  return (
    <StyledContainer>
      <StyledRouter history={browserHistory}>
        <BarNavigation />
        <Routes />
      </StyledRouter>
      <SocialMediaBar />
    </StyledContainer>
  );
};
