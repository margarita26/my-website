import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { useWindowSize } from "@react-hook/window-size";
import { colors, fonts, fontSizes } from "../constants";
import logo from "../logo.svg";
import { SocialMediaBar } from "./SocailMediaBar";

const fadeInAnimation = keyframes`
      0% { opacity: 0;}
      100% { opacity: 1;}
      `;

const StyledMenu = styled.nav`
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  text-align: left;
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

type NavItemProps = {
  delay: number;
};

const StyledNavItem = styled.a<NavItemProps>`
  animation-name: ${fadeInAnimation};
  animation-duration: 3s;
  animation-delay: ${(props: NavItemProps) => props.delay};
  color: ${colors.white};
  font-size: ${fontSizes.responsiveText};
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledLogo width={width / 8} height={height / 8} src={logo} />
        <StyledNavItem delay={3}>About me</StyledNavItem>
        <StyledNavItem delay={9}>Experience</StyledNavItem>
        <StyledNavItem delay={27}>Blog</StyledNavItem>
      </div>
      <SocialMediaBar />
    </StyledMenu>
  );
};
