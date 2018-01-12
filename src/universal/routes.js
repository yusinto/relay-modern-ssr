import React from 'react';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';

import App from './app';
import Home from './home';
import Countries from './countries';

const routes =
  <Route path="/" Component={App}>
    <Route Component={Home} />
    <Route path="countries" Component={Countries}/>
    <Route path="*" Component={() => "Page Not Found"}/>
  </Route>;

export default {routeConfig: makeRouteConfig(routes)};
