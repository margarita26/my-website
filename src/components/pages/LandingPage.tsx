import styled from "@emotion/styled";
import { createBrowserHistory as history } from "history";
import React from "react";
import { isMobile } from "react-device-detect";
import { Router } from "react-router-dom";
import { colors, fonts, fontSizes } from "src/constants";
import { BarNavigation, Routes, SocialMediaBar } from "../../components";

const browserHistory = history();

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
  left: 0;
  position: fixed;
  margin: 8px;
`;

const StyledFooterText = styled.text`
  font-size: ${isMobile ? fontSizes.small : fontSizes.regular};
  font-family: ${fonts.rajdhani};
  color: ${colors.white};
`;

export const LandingPage: React.FC = () => {
  return (
    <StyledDiv>
      <Router history={browserHistory}>
        <BarNavigation />
        <Routes />
      </Router>
      <StyledFooterDiv>
        <SocialMediaBar />
        <StyledFooterText> © M.G 2020 </StyledFooterText>
      </StyledFooterDiv>
    </StyledDiv>
  );
};
