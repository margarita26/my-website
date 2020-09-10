import React from 'react';
import styled from '@emotion/styled';
import { fonts, colors, fontSizes, screenSize } from '../../constants';
import { keyframes } from '@emotion/core';

type TextProps = {
  textSize: string;
  textColor: string;
  mediaPhoneSize: string;
};

const fadeInAnimation = keyframes`
      0% { opacity: 0;}
      100% { opacity: 1;}
      `;

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
`;

const StyledText = styled.text<TextProps>`
  font-family: ${fonts.rajdhani};
  font-size: ${(props: TextProps) => props.textSize};
  color: ${(props: TextProps) => props.textColor};
  @media (min-width: ${screenSize.phone}) {
    font-size: ${(props: TextProps) => props.mediaPhoneSize};
  }
  @media (min-width: ${screenSize.desktop}) {
    font-size: ${(props: TextProps) => props.textSize};
  }
`;

export const WelcomePage: React.FC = () => {
  return (
    <StyledContainer>
      <div>
        <StyledText
          textColor={colors.neonBlue}
          textSize={fontSizes.heading}
          mediaPhoneSize={fontSizes.regular}>
          Hi, my name is
        </StyledText>
      </div>
      <div>
        <StyledText
          textColor={colors.white}
          textSize={fontSizes.big}
          mediaPhoneSize={fontSizes.heading}>
          Margarita Gubanova
        </StyledText>
      </div>
      <div>
        <StyledText
          textColor={colors.white}
          textSize={fontSizes.heading}
          mediaPhoneSize={fontSizes.regular}>
          I am a software engineer located in Boston 🤓
        </StyledText>
      </div>
    </StyledContainer>
  );
};
