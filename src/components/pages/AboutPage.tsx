import styled from "@emotion/styled";
import React from "react";

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
`;

export const AboutPage: React.FC = () => {
  return <StyledContainer></StyledContainer>;
};
