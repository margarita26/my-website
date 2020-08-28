import styled from '@emotion/styled';
import { useWindowSize } from '@react-hook/window-size';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { colors, fonts,  fontSizesVW, routes } from '../constants';
import logo from '../logo.svg';

type StyledLogoProps = {
  width: number;
  height: number;
};

const StyledNavBar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledNavItem = styled(Nav.Item)`
  padding: 16px;
`;

const StyledNavLink = styled(Nav.Link)`
  text-decoration: none;
`;

const StyledLogo = styled.img<StyledLogoProps>`
  width: ${(props: StyledLogoProps) => props.width};
  height: ${(props: StyledLogoProps) => props.height};
`;

const StyledText = styled.text`
  color: ${colors.white};
  font-size: ${fontSizesVW.heading};
  font-family: ${fonts.rajdhani};
  &:hover {
    color: ${colors.neonBlue};
    cursor: pointer;
  }
  @media (min-width: 375px) {
    font-size: 16px;
  }
  @media (min-width: 1000px) {
    font-size: 32px;
  }
`;

export const BarNavigation: React.FC = () => {
  const [width, height] = useWindowSize();

  return (
    <StyledNavBar>
      <StyledNav activeKey={routes.welcomePage}>
        <StyledNavItem>
          <StyledNavLink href={routes.welcomePage}>
            <StyledLogo width={width / 10} height={height / 10} src={logo} />
          </StyledNavLink>
        </StyledNavItem>

        <StyledNavItem>
          <StyledNavLink href={routes.aboutMePage}>
            <StyledText>About me</StyledText>
          </StyledNavLink>
        </StyledNavItem>

        <StyledNavItem>
          <StyledNavLink href={routes.experiencePage}>
            <StyledText>Experience</StyledText>
          </StyledNavLink>
        </StyledNavItem>

        <StyledNavItem>
          <StyledNavLink href={routes.blogPage}>
            <StyledText>Blog</StyledText>
          </StyledNavLink>
        </StyledNavItem>
      </StyledNav>
    </StyledNavBar>
  );
};
