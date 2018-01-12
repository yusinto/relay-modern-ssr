import React from 'react';
import Link from 'found/lib/Link';

const App = ({location: {pathname}, children}) => {
  return (
    <div>
      <h1>Relay Modern SSR Demo</h1>
      <span>
          {
            pathname === '/' ?
              <span style={{fontWeight: 'bold'}}>Home</span> :
              <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
          }
        </span>
      {' '} | {' '}
      <span>
          {
            pathname === '/countries' ?
              <span style={{fontWeight: 'bold'}}>Countries</span> :
              <Link to="/countries" style={{textDecoration: 'none'}}>Countries</Link>
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
