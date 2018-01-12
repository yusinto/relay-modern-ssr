import React from 'react';
import {render} from 'react-dom';
import createBrowserRouter from 'found/lib/createBrowserRouter';
import routeConfig from '../universal/routes';

const BrowserRouter = createBrowserRouter(routeConfig);

render(<BrowserRouter/>, document.getElementById('reactDiv'));

