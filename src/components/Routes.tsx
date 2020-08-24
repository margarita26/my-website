import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history} from 'history';
import { WelcomePage, AboutPage, BlogPage, ExperiencePage } from '../pages';
import {routes} from "../constants";


export const Routes: React.FC = () => {
  return (
    <Router history={history()}>
      <Switch>
        <Route path={routes.welcomePage} exact component={WelcomePage} />
        <Route path={routes.aboutMePage} exact component={AboutPage} />
        <Route path={routes.experiencePage} exact component={ExperiencePage} />
        <Route path={routes.blogPage} exact component={BlogPage} />
      </Switch>
    </Router>
  );
};
