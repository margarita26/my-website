import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import "./App.css";
import { LandingPage } from "./components/pages";
import { colors } from "./constants/colors";
import { CookiesProvider } from "react-cookie";

const GLobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
`;

const StyledDiv = styled.div`
  background-color: ${colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

function App() {
  return (
    <CookiesProvider>
      <StyledDiv className="App">
        <Global styles={GLobalStyles} />
        <LandingPage />
      </StyledDiv>
    </CookiesProvider>
  );
}

export default App;
