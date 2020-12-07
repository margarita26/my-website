import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../constants";
import { WelcomePage, ResumeTerminal } from "./pages";


export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.welcomePage} exact component={WelcomePage} />
      <Route path={routes.terminal} exact component={ResumeTerminal} />
    </Switch>
  );
};
