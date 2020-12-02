import styled from "@emotion/styled";
import CSS from "csstype";
import React from "react";
import { isMobile } from "react-device-detect";
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { colors, fontSizes } from "../constants";

const StyledDiv = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled.a`
  font-size: ${isMobile ? fontSizes.regular : fontSizes.heading};
`;

const socialMediaIconStyle: CSS.Properties = {
  color: colors.white,
  padding: "4px",
};

export const SocialMediaBar: React.FC = () => {
  return (
    <StyledDiv>
      <StyledLink
        href="https://www.instagram.com/margarita_gbnva/"
        target="_blank"
        rel="noopener noreferrer">
        <FaInstagram style={socialMediaIconStyle} />
      </StyledLink>
      <StyledLink
        href="https://www.facebook.com/rita.gubanova.9/"
        target="_blank"
        rel="noopener noreferrer">
        <FaFacebookSquare style={socialMediaIconStyle} />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/margarita-gubanova/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin style={socialMediaIconStyle} />
      </StyledLink>
      <StyledLink href="https://github.com/margarita26" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare style={socialMediaIconStyle} />
      </StyledLink>
    </StyledDiv>
  );
};
