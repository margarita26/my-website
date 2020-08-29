import styled from '@emotion/styled';
import { createBrowserHistory as history } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { BarNavigation, Routes, SocialMediaBar } from '../../components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 90%;
`;

const StyledNavigationContainer = styled.div`
  padding: 32px;
`;

const browserHistory = history();

export const LandingPage: React.FC = () => {
  return (
    <StyledDiv>
      <Router history={browserHistory}>
        <StyledNavigationContainer style={{ padding: '64px' }}>
          <BarNavigation />
        </StyledNavigationContainer>
        <Routes />
      </Router>
      <SocialMediaBar />
    </StyledDiv>
  );
};
