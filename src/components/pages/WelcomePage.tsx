import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import Emoji from "a11y-react-emoji";
import React from "react";
import { isMobile } from "react-device-detect";
import { ReactSVG } from "react-svg";
import { colors, fonts, fontSizes, fontWeights } from "../../constants";

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

const StyledContainer = styled.div`
  height: 100%;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
`;

const StyledTextContainer = styled.div`
  width: 100%;
`;

const StyledText = styled.text<TextProps>`
  font-family: ${(props: TextProps) => props.textFamily};
  font-size: ${(props: TextProps) => props.textSize};
  font-weight: ${(props: TextProps) => props.textWeight};
  color: ${(props: TextProps) => props.textColor};
`;

export const WelcomePage: React.FC = () => {
  return (
    <StyledContainer>
      <div>
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
      </div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ReactSVG src={require("../../assets/dna.svg")} />
        <StyledText
          textColor={colors.lightGrey}
          textFamily={fonts.rajdhani}
          textSize={fontSizes.regular}
          textWeight={0}>
          The site is under construction
        </StyledText>
      </div>
    </StyledContainer>
  );
};
