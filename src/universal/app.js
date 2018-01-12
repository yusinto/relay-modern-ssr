import React from 'react';
import Link from 'found/lib/Link';

const App = ({location: {pathname}, children}) => {
  return (
    <div>
      <h1>Relay Modern SSR Demo</h1>
      <span>
          {
            pathname === '/' ?
              <span>Home</span> : <Link to="/">Home</Link>
          }
        </span>
      {' '} | {' '}
      <span>
          {
            pathname === '/countries' ?
              <span>Countries</span> : <Link to="/countries">Countries</Link>
          }
        </span>
      <div>
        <br/>
        {children}
      </div>
    </div>
  );
};

export default App;
