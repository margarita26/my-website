import styled from '@emotion/styled';
import { createBrowserHistory as history } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { colors, fonts, fontSizes } from 'src/constants';
import { BarNavigation, Routes, SocialMediaBar } from '../../components';

const browserHistory = history();

const StyledRouter = styled(Router)`
  padding: 8px;
`;

const StyledDiv = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const StyledFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  position: fixed;
`;

const StyledFooterText = styled.text`
  font-size: ${fontSizes.regular};
  font-family: ${fonts.rajdhani};
  color: ${colors.white};
`;

export const LandingPage: React.FC = () => {
  return (
    <StyledDiv>
      <StyledRouter history={browserHistory}>
        <BarNavigation />
        <Routes />
      </StyledRouter>
      <StyledFooterDiv>
        <SocialMediaBar />
        <StyledFooterText> M.G 2020 </StyledFooterText>
      </StyledFooterDiv>
    </StyledDiv>
  );
};
