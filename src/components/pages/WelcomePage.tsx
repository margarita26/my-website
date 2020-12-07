import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Emoji from "a11y-react-emoji";
import React from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";
import { colors, fonts, fontSizes, fontWeights } from "../../constants";
import { routes } from "../../constants/routes";

type TextProps = {
  textFamily: string;
  textSize: string;
  textColor: string;
  textWeight: number;
};

const fadeInAnimation = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
  `;

const glowingAnimation = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;

const StyledContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
`;

const StyledTextSectrionContainer = styled.section`
  margin: 64px;
`;

const StyledTextContainer = styled.aside`
  width: 100%;
`;

const StyledText = styled.aside<TextProps>`
  font-family: ${(props: TextProps) => props.textFamily};
  font-size: ${(props: TextProps) => props.textSize};
  font-weight: ${(props: TextProps) => props.textWeight};
  color: ${(props: TextProps) => props.textColor};
`;

const StyledGlowingIcon = styled(FontAwesomeIcon)`
  color: ${colors.white};
  font-size: ${fontSizes.heading};
  animation: ${glowingAnimation} 1s infinite alternate;
  &:hover {
    cursor: pointer;
  }
`;

const StyledTerminalIconContainer = styled.nav`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomePage: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTextSectrionContainer>
        <StyledTextContainer>
          <StyledText
            textColor={colors.neonBlue}
            textFamily={fonts.rajdhani}
            textSize={isMobile ? fontSizes.regular : fontSizes.heading}
            textWeight={0}>
            Hi, my name is
          </StyledText>
        </StyledTextContainer>
        <StyledTextContainer>
          <StyledText
            textColor={colors.white}
            textFamily={fonts.heebo}
            textSize={isMobile ? fontSizes.heading : fontSizes.big}
            textWeight={fontWeights.bold}>
            Margarita Gubanova
          </StyledText>
        </StyledTextContainer>
        <StyledTextContainer>
          <StyledText
            textColor={colors.lightGrey}
            textFamily={fonts.rajdhani}
            textSize={isMobile ? fontSizes.regular : fontSizes.heading}
            textWeight={0}>
            I am a software engineer located in Boston <Emoji symbol="🤓 " label="smart" />
          </StyledText>
        </StyledTextContainer>
        <aside style={{ opacity: 0, height: 0 }}>
          приветики пидорасы
          <Emoji symbol="😀" label="лох" />{" "}
        </aside>
      </StyledTextSectrionContainer>
      <StyledTerminalIconContainer>
        <Link to={routes.terminal} smooth={true} spy={true}>
          <StyledGlowingIcon icon={faTerminal} />
        </Link>
      </StyledTerminalIconContainer>
    </StyledContainer>
  );
};
