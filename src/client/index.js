import React from 'react';
import {hydrate} from 'react-dom';
import createInitialBrowserRouter from 'found/lib/createInitialBrowserRouter';
import createRender from 'found/lib/createRender';
import routeConfig from '../universal/routes';

(async () => {
  const BrowserRouter = await createInitialBrowserRouter({
    routeConfig,
    render: createRender({
      renderError: (
        { error }, // eslint-disable-line react/prop-types
      ) => <div>{error.status === 404 ? 'Not found' : 'Error'}</div>,
    }),
  });

  hydrate(<BrowserRouter/>, document.getElementById('reactDiv'));
})();
