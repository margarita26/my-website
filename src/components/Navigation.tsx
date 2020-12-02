import styled from "@emotion/styled";
import { AppBar, IconButton, Link, Toolbar } from "@material-ui/core";
import { useWindowSize } from "@react-hook/window-size";
import React from "react";
import { routes } from "../constants";
import logo from "../logo.svg";

type LogoProps = {
  width: number;
  height: number;
};

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 4px;
  :hover {
    text-decoration: none;
    color: transparent;
  }
`;

const StyledLogo = styled.img<LogoProps>`
  width: ${(props: LogoProps) => props.width};
  height: ${(props: LogoProps) => props.height}; ;
`;

// const StyledText = styled.text`
//   font-family: ${fonts.rajdhani};
//   font-size: ${fontSizes.heading};
//   color: ${colors.white};
//   text-decoration: none;
//   :hover {
//     color: ${colors.neonBlue};
//   }
//   @media (min-width: ${screenSize.phone}) {
//     font-size: ${fontSizes.regular};
//   }
//   @media (min-width: ${screenSize.desktop}) {
//     font-size: ${fontSizes.heading};
//   }
// `;

export const BarNavigation: React.FC = () => {
  const [width, height] = useWindowSize();

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <StyledLink href={routes.welcomePage}>
          <IconButton edge="start" color="default">
            <StyledLogo width={width / 10} height={height / 10} src={logo} />
          </IconButton>
        </StyledLink>
        {/* <StyledLink href={routes.aboutMePage}>
          <Button color="default">
            <StyledText>about me</StyledText>
          </Button>
        </StyledLink> */}
        {/* <StyledLink href={routes.experiencePage}>
          <Button color="default">
            <StyledText>experience</StyledText>
          </Button>
        </StyledLink>
        <StyledLink href={routes.blogPage}>
          <Button color="default">
            <StyledText>blog</StyledText> 
           </Button> 
         </StyledLink> */}
      </Toolbar>
    </AppBar>
  );
};
