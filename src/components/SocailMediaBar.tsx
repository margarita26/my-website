import React from "react";
import styled from "@emotion/styled";
import CSS from "csstype";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { fontSizes } from "../constants";

const StyledDiv = styled.div`
  padding: 16px;
`;
const socialMediaIconStyle: CSS.Properties = {
  color: "white",
  padding: "8px",
  fontSize: fontSizes.heading,
};

export const SocialMediaBar: React.FC = () => {
  return (
    <StyledDiv>
      <a
        href="https://www.instagram.com/margarita_gbnva/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram style={socialMediaIconStyle} />
      </a>
      <a
        href="https://www.facebook.com/rita.gubanova.9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare style={socialMediaIconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/margarita-gubanova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin style={socialMediaIconStyle} />
      </a>
      <a
        href="https://github.com/margarita26"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare style={socialMediaIconStyle} />
      </a>
    </StyledDiv>
  );
};
