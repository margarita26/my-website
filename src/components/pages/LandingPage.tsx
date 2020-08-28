import styled from '@emotion/styled';
import { createBrowserHistory as history } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { Routes, BarNavigation, SocialMediaBar } from '../../components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingPage: React.FC = () => {
  return (
    <StyledDiv>
      <Router history={history()}>
        <BarNavigation />
        <Routes />
      </Router>
      <SocialMediaBar />
    </StyledDiv>
  );
};
