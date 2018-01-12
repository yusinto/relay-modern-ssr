import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import expressGraphql from 'express-graphql';
import schema from './schema';

const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
app.use(WebpackDevMiddleware(webpackCompiler, {
  publicPath: WebpackConfig.output.publicPath,
  noInfo: true,
  quiet: false
}));
app.use(WebPackHotMiddleware(webpackCompiler));

app.post('/graphql', expressGraphql({
  schema,
  graphiql: false,
  pretty: true,
}));

app.get('/graphql', expressGraphql({
  schema,
  graphiql: true,
  pretty: true,
}));

app.use((req, res) => {
  const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Relay Modern SSR</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="reactDiv"/>
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;

  res.end(htmlString);
});
app.listen(3000, () => {
  console.log(`Started relay-modern-ssr...`);
});
