import styled from "@emotion/styled";
import { AppBar, IconButton, Link, Toolbar } from "@material-ui/core";
import React from "react";
import { isMobile } from "react-device-detect";
import { routes } from "../constants";
import logo from "../logo.svg";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 4px;
  :hover {
    text-decoration: none;
    color: transparent;
  }
`;

export const BarNavigation: React.FC = () => {
  return (
    <AppBar
      color="transparent"
      position="sticky"
      style={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <StyledLink href={routes.welcomePage}>
          <IconButton edge="start" color="default">
            <img width={isMobile ? 50 : 80} height={isMobile ? 50 : 80} src={logo} alt="logo" />
          </IconButton>
        </StyledLink>
        {/* <StyledLink href={routes.aboutMePage}>
          <Button color="default">
            <StyledText>about me</StyledText>
          </Button>
        </StyledLink> */}
      </Toolbar>
    </AppBar>
  );
};
