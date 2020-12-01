import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { colors, fonts, fontSizes, fontWeights, screenSize } from '../../constants';
import { render } from 'react-dom';
import { ReactSVG } from 'react-svg';

type TextProps = {
  textFamily: string;
  textSize: string;
  textColor: string;
  textWeight: number;
  mediaPhoneSize: string;
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
  justify-content: space-around;
  flex-direction: column;
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
`;

const StyledTextContainer = styled.div`
  width: 100%;
`;

const StyledText = styled.text<TextProps>`
  width: 100%;
  font-family: ${(props: TextProps) => props.textFamily};
  font-size: ${(props: TextProps) => props.textSize};
  font-weight: ${(props: TextProps) => props.textWeight};
  color: ${(props: TextProps) => props.textColor};
  @media (min-width: ${screenSize.phone}) {
    font-size: ${(props: TextProps) => props.mediaPhoneSize};
  }
  @media (min-width: ${screenSize.desktop}) {
    font-size: ${(props: TextProps) => props.textSize};
  }
`;

const StyledDnaContainer = styled.div``;

export const WelcomePage: React.FC = () => {
  return (
    <StyledContainer>
      <div>
        <StyledTextContainer>
          <StyledText
            textColor={colors.neonBlue}
            textFamily={fonts.rajdhani}
            textSize={fontSizes.heading}
            textWeight={0}
            mediaPhoneSize={fontSizes.regular}>
            Hi, my name is
          </StyledText>
        </StyledTextContainer>
        <StyledTextContainer>
          <StyledText
            textColor={colors.white}
            textFamily={fonts.heebo}
            textSize={fontSizes.big}
            textWeight={fontWeights.bold}
            mediaPhoneSize={fontSizes.heading}>
            Margarita Gubanova
          </StyledText>
        </StyledTextContainer>
        <StyledTextContainer>
          <StyledText
            textColor={colors.lightGrey}
            textFamily={fonts.rajdhani}
            textSize={fontSizes.heading}
            textWeight={0}
            mediaPhoneSize={fontSizes.regular}>
            I am a software engineer located in Boston 🤓
          </StyledText>
        </StyledTextContainer>
      </div>
      <div>
        <ReactSVG src={require('../../assets/dna.svg')} />
        <StyledText
          textColor={colors.lightGrey}
          textFamily={fonts.rajdhani}
          textSize={fontSizes.regular}
          textWeight={0}
          mediaPhoneSize={fontSizes.regular}>
          The site is under construction
        </StyledText>
      </div>
    </StyledContainer>
  );
};
