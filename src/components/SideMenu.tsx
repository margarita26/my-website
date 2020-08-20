import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useWindowSize } from "@react-hook/window-size";
import { colors, fontSizes, fonts } from "../constants";
import logo from "../logo.svg";


const fadeInAnimation = keyframes`
      0% { opacity: 0;}
      100% { opacity: 1;}
      `;

const StyledMenu = styled.nav`
  animation: 5s ${fadeInAnimation};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  text-align: left;
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const StyledNavItem = styled.a`
  color: ${colors.white};
  font-size: ${fontSizes.heading};
  font-family: ${fonts.rajdhani};
  padding: 16px;
  &:hover {
    color: ${colors.lightBlue};
    cursor: pointer;
  }
`;

type LogoProps = {
  width: number;
  height: number;
};

const StyledLogo = styled.img<LogoProps>`
  width: ${(props: LogoProps) => props.width};
  height: ${(props: LogoProps) => props.height};
  padding: 16px;
`;

export const SideMenu: React.FC = () => {
  const [width, height] = useWindowSize();

  return (
    <StyledMenu>
      <StyledLogo width={width / 8} height={height / 8} src={logo} />
      <StyledNavItem>About me</StyledNavItem>
    </StyledMenu>
  );
};
