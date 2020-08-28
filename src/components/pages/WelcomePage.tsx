import React from 'react';
import styled from '@emotion/styled';
import { fonts, colors, fontSizesVW, fontSizesPX } from '../../constants';
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

const StyledDiv = styled.div`
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
  @media (min-width: 375px) {
    font-size: ${(props: TextProps) => props.mediaPhoneSize};
  }
  @media (min-width: 1000px) {
    font-size: ${(props: TextProps) => props.textSize};
  }
`;

export const WelcomePage: React.FC = () => {
  return (
    <StyledDiv>
      <div>
        <StyledText
          textColor={colors.neonBlue}
          textSize={fontSizesVW.heading}
          mediaPhoneSize={fontSizesPX.regular}>
          Hi, my name is
        </StyledText>
      </div>
      <div>
        <StyledText
          textColor={colors.white}
          textSize={fontSizesVW.big}
          mediaPhoneSize={fontSizesPX.heading}>
          Margarita Gubanova
        </StyledText>
      </div>
      <div>
        <StyledText
          textColor={colors.white}
          textSize={fontSizesVW.heading}
          mediaPhoneSize={fontSizesPX.regular}>
          I am a software engineer located in Boston 🤓
        </StyledText>
      </div>
    </StyledDiv>
  );
};
