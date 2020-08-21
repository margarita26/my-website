import React, { useEffect, useState } from "react";
import "./App.css";
import { css, Global } from "@emotion/core";
import { MainPage, LandingAnimation } from "./pages";
import { colors } from "./constants/colors";
import styled from "@emotion/styled";

const GLobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap");
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
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledDiv className="App">
      <Global styles={GLobalStyles} />
      {showAnimation ? <LandingAnimation /> : <MainPage />}
    </StyledDiv>
  );
}

export default App;
