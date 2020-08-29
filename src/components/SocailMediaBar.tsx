import React from 'react';
import styled from '@emotion/styled';
import CSS from 'csstype';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { fontSizes } from '../constants';

const StyledContainer = styled.div`
  padding: 8px;
  bottom: 0;
  position: absolute;
`;

const StyledLink = styled.a`
  font-size: ${fontSizes.heading};
  @media (min-width: 375px) {
    font-size: ${fontSizes.regular};
  }
  @media (min-width: 1000px) {
    font-size: ${fontSizes.heading};
  }
`;

const socialMediaIconStyle: CSS.Properties = {
  color: 'white',
  padding: '8px',
};

export const SocialMediaBar: React.FC = () => {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};
