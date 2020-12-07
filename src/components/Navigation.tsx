import styled from "@emotion/styled";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";
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
    <AppBar color="transparent" position="fixed" style={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <StyledLink to={routes.welcomePage} smooth={true} spy={true}>
          <IconButton edge="start" color="default">
            <img width={isMobile ? 50 : 80} height={isMobile ? 50 : 80} src={logo} alt="logo" />
          </IconButton>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};
