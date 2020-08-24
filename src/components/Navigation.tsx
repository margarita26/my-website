import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { useWindowSize } from "@react-hook/window-size";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { colors, fonts, fontSizes, routes } from "../constants";
import logo from "../logo.svg";
import { SocialMediaBar } from "./SocailMediaBar";

const fadeInAnimation = keyframes`
      0% { opacity: 0;}
      100% { opacity: 1;}
      `;

const StyledMenu = styled(Navbar)`
  animation-name: ${fadeInAnimation};
  animation-duration: 5s;
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

const MenuNavMenuItem = styled(Nav.Item)`
  padding: 16px;
`;

const StyledNavLink = styled(Nav.Link)`
  text-decoration: none; 
`

const StyledMenuItemText = styled.text`
  color: ${colors.white};
  font-size: ${fontSizes.responsiveText};
  font-family: ${fonts.rajdhani};
  &:hover {
    color: ${colors.grey};
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
`;

export const SideBarNavigation: React.FC = (props) => {
  const [width, height] = useWindowSize();

  return (
    <StyledMenu>
      <Nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "4vw",
        }}
        activeKey={routes.welcomePage}
      >
        <MenuNavMenuItem>
          <StyledNavLink
            href={routes.welcomePage}
          >
            <StyledLogo width={width / 8} height={height / 8} src={logo} />
          </StyledNavLink>
        </MenuNavMenuItem>

        <MenuNavMenuItem>
          <StyledNavLink
            href={routes.aboutMePage}
            
          >
            <StyledMenuItemText>About me</StyledMenuItemText>
          </StyledNavLink>
        </MenuNavMenuItem>

        <MenuNavMenuItem>
          <StyledNavLink href={routes.experiencePage}>
            <StyledMenuItemText>Experience</StyledMenuItemText>
          </StyledNavLink>
        </MenuNavMenuItem>

        <MenuNavMenuItem>
          <StyledNavLink href={routes.blogPage}>
            <StyledMenuItemText>Blog</StyledMenuItemText>
          </StyledNavLink>
        </MenuNavMenuItem>
      </Nav>
      <SocialMediaBar />
    </StyledMenu>
  );
};
