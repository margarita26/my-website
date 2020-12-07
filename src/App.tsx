import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { CookiesProvider } from "react-cookie";
import "./App.css";
import { LandingPage } from "./components/pages";
import { colors } from "./constants";
import { ApiProvider, ErrorReportingProvider } from "./contexts";

const GLobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap"');
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0B1A2E",
    },
    secondary: {
      main: "#3b4757",
    },
    tonalOffset: 0.5,
  },
});

const StyledContainer = styled.main`
  height: 100%;
  width: 100%;
  background-color: ${colors.primary};
  overflow: scroll;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <ErrorReportingProvider>
          <ApiProvider>
            <Global styles={GLobalStyles} />
            <StyledContainer>
              <LandingPage />
            </StyledContainer>
          </ApiProvider>
        </ErrorReportingProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
