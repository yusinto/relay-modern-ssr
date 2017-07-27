import React, {Component} from 'react';
import Customer from './customer';
import {QueryRenderer, graphql} from 'react-relay';
import environment from './relayEnvironment';

export const appRootQuery = graphql`
  query appRootQuery {
    viewer {
      ...customer_viewer
    }
  }
`;

const renderMethod = ({error, props}, data) => {
  if(data) {
    return <Customer viewer={data.viewer}/>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  } else if (props) {
    return <Customer viewer={props.viewer}/>;
  }
  return <div>loading...</div>;
};

class App extends Component {
  render() {
    console.log(`data looks like: ${JSON.stringify(this.props.data)}`);
    return <QueryRenderer environment={environment} query={appRootQuery} render={(a) => renderMethod(a, this.props.data)}/>;
  }
}

export default App;
