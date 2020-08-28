import React from 'react';
import styled from '@emotion/styled';
import CSS from 'csstype';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { fontSizesPX, fontSizesVW } from '../constants';

const StyledDiv = styled.div`
  padding: 8px;
  bottom: 0;
  position: absolute;
`;

const socialMediaIconStyle: CSS.Properties = {
  color: 'white',
  padding: '8px',
};

const StyledLink = styled.a`
  font-size: ${fontSizesVW.heading};
  @media (min-width: 30px) {
    font-size: ${fontSizesPX.regular};
  }
  @media (min-width: 1000px) {
    font-size: ${fontSizesVW.heading};
  }
`;

export const SocialMediaBar: React.FC = () => {
  return (
    <StyledDiv>
      <StyledLink
        href="https://www.instagram.com/margarita_gbnva/"
        target="_blank"
        rel="noopener noreferrer">
        <FaInstagram style={socialMediaIconStyle} />
      </StyledLink>
      <StyledLink href="https://www.facebook.com/rita.gubanova.9/" target="_blank" rel="noopener noreferrer">
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
