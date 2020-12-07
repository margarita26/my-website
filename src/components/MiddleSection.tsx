import React from "react";
import { routes } from "../constants";
import { ResumeTerminal, WelcomePage } from "./pages";

export const MiddleSection: React.FC = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <>
      <section id={routes.welcomePage} style={{ height: height, width: width }}>
        <WelcomePage />
      </section>
      <section id={routes.terminal} style={{ height: height, width: width }}>
        <ResumeTerminal />
      </section>
    </>
  );
};
