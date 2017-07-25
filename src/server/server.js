import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';

import RelayEnvironment from '../universal/relayEnvironment';
import {appRootQuery} from '../universal/app';

const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Relay Modern SSR</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="reactDiv" />
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;
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
  const {createOperationSelector, getOperation} = RelayEnvironment.unstable_internal;
  const query = getOperation(appRootQuery);
  const operation = createOperationSelector(query);
  RelayEnvironment.streamQuery({
    cacheConfig: null,
    onCompleted: () => console.log('onCompleted'),
    onError: () => console.log('onError'),
    onNext: (results) => console.log(`onNext results look like: ${JSON.stringify(results)}`), // WORKS!!
    operation,
  });


  res.end(htmlString);
});

app.listen(3000, () => {
  console.log(`Started relay-modern-ssr...`);
});
