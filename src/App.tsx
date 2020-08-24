import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import { css, Global } from "@emotion/core";
import { LandingPage } from "./pages";
import { colors } from "./constants/colors";
import styled from "@emotion/styled";

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
    <StyledDiv className="App">
      <Global styles={GLobalStyles} />
       <LandingPage />
    </StyledDiv>
  );
}

export default App;
