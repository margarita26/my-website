import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { WelcomePage, AboutPage, BlogPage, ExperiencePage } from './pages';
import { routes } from '../constants';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.welcomePage} exact component={WelcomePage} />
      <Route path={routes.aboutMePage} exact component={AboutPage} />
      <Route path={routes.experiencePage} exact component={ExperiencePage} />
      <Route path={routes.blogPage} exact component={BlogPage} />
    </Switch>
  );
};
