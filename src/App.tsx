import React, { useEffect, useState } from "react";
import "./App.css";
import { css, Global } from "@emotion/core";
import { MainPage, LandingAnimation } from "./pages";

const GLobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap");
`;

function App() {
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <body>
        <header className="App-header">
          <Global styles={GLobalStyles} />
          {showAnimation ? <LandingAnimation /> : <MainPage />}
        </header>
      </body>
    </div>
  );
}

export default App;
