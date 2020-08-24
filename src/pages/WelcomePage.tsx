import React from "react";
import styled from "@emotion/styled";
import { fonts, colors, fontSizes } from "../constants";

const StyledDiv = styled.div`
  display: flex;
`;

type TextProps = { 
  textSize: string;
}

const StyledText = styled.text<TextProps>`
  font-family: ${fonts.rajdhani};
  font-size: ${(props: TextProps) => props.textSize};
  color: ${colors.white};
`;


export const WelcomePage: React.FC = () => {
  return (
    <StyledDiv>
      <p>
      <StyledText textSize={fontSizes.regularText} > Hi, my name is </StyledText>
      <br></br>
      <StyledText textSize={fontSizes.big}> Margarita Gubanova </StyledText>
      </p>
    </StyledDiv>
  );
};
