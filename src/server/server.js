import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';

import RelayEnvironment from '../universal/relayEnvironment';
import App, {appRootQuery} from '../universal/app';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
app.use(WebpackDevMiddleware(webpackCompiler, {
  publicPath: WebpackConfig.output.publicPath,
  noInfo: true,
  quiet: false
}));
app.use(WebPackHotMiddleware(webpackCompiler));
app.use((req, res) => {

  // YAYY!!! This works!
  /**
   * Returns
   * {
  "fieldPayloads": [],
  "source": {
    "client:root": {
      "__id": "client:root",
      "__typename": "__Root",
      "viewer": {
        "__ref": "viewer-fixed"
      }
    },
    "viewer-fixed": {
      "__id": "viewer-fixed",
      "__typename": "Viewer",
      "id": "viewer-fixed",
      "Customer{\"id\":\"cj3xrfkrapzo90174udonmzsh\"}": {
        "__ref": "cj3xrfkrapzo90174udonmzsh"
      }
    },
    "cj3xrfkrapzo90174udonmzsh": {
      "__id": "cj3xrfkrapzo90174udonmzsh",
      "__typename": "Customer",
      "email": "yusinto@gmail.com",
      "id": "cj3xrfkrapzo90174udonmzsh"
    }
  }
}
   */
  const {createOperationSelector} = RelayEnvironment.unstable_internal;
  const operation = createOperationSelector(appRootQuery());
  // console.log(`appRootQuery look like: ${JSON.stringify(appRootQuery)}`);
  // console.log(`operation look like: ${JSON.stringify(operation)}`);
  RelayEnvironment.sendQuery({
    cacheConfig: null,
    onCompleted: () => console.log('onCompleted'),
    onError: () => console.log('onError'),
    onNext: (results) => {

      // TODO: at the moment <App /> outputs <div>loading...</div> which needs to be fixed!

      // At this point, the graphql response should already be in the Store
      // So we can look it up and use it to render our App component
      //const snapshot = RelayEnvironment.lookup(operation.fragment);
      const componentToRender = <App />;

      // TODO: Somehow supply snapshot.data to <App />
      const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Relay Modern SSR</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="reactDiv">${renderToStaticMarkup(componentToRender)}</div>
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;

      res.end(htmlString);
    },
    operation,
  });
});

app.listen(3000, () => {
  console.log(`Started relay-modern-ssr...`);
});
