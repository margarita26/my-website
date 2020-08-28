import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import './App.css';
import { LandingPage } from './components/pages';
import { colors } from './constants/colors';
import { CookiesProvider } from 'react-cookie';
import { useWindowSize } from '@react-hook/window-size';

const GLobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
`;

type StyledDivProps = {
  width: number;
  height: number;
};

const StyledDiv = styled.div<StyledDivProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.primary};
  min-width: 100%;
  min-height: 100%;
  height: ${(props: StyledDivProps) => props.height};
  width: ${(props: StyledDivProps) => props.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

function App() {
  const [width, height] = useWindowSize();

  return (
    <CookiesProvider>
      <StyledDiv width={width} height={height} className="App">
        <Global styles={GLobalStyles} />
        <LandingPage />
      </StyledDiv>
    </CookiesProvider>
  );
}

export default App;
