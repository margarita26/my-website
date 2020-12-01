import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { fonts, colors, fontSizes, screenSize, fontWeights } from '../../constants';

type TextProps = {
  textFamily: string;
  textSize: string;
  textColor: string;
  textWeight: number;
  mediaPhoneSize: string;
};

const StyledContainer = styled.div`
  display: flex;
  position: absolute;
  top: 20%; 
  left: 4%;
  height: 80%;
  width: 74%;
  padding-bottom: 64px;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledText = styled.text<TextProps>`
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

export const AboutPage: React.FC = () => {
  return (
    <StyledContainer>
     
    </StyledContainer>
  );
};
