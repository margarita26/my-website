import styled from "@emotion/styled";
import React from "react";
import { isMobile } from "react-device-detect";
import { colors, fonts, fontSizes } from "src/constants";
import { BarNavigation, MiddleSection, SocialMediaBar } from "../../components";

const StyledFooterDiv = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  position: fixed;
  margin: ${isMobile ? "8px" : "16px"};
`;

const StyledFooterText = styled.footer`
  font-size: ${isMobile ? fontSizes.small : fontSizes.regular};
  font-family: ${fonts.rajdhani};
  color: ${colors.white};
`;

export const LandingPage: React.FC = () => {
  return (
    <>
      <BarNavigation />
      <MiddleSection />
      <StyledFooterDiv>
        <SocialMediaBar />
        <StyledFooterText> © M.G 2020 </StyledFooterText>
      </StyledFooterDiv>
    </>
  );
};
