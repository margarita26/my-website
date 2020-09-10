import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import { LandingPage } from './components/pages';
import { colors } from './constants/colors';
import { ApiProvider } from './contexts/api-context';

const GLobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0B1A2E',
    },
    secondary: {
      main: '#3b4757',
    },
    tonalOffset: 0.2,
  },
});

const StyledContainer = styled(Container)`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: ${colors.primary};
  overflow: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <StyledContainer>
          <Global styles={GLobalStyles} />
          <ApiProvider>
            <LandingPage />
          </ApiProvider>
        </StyledContainer>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
