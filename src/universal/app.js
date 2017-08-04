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

const renderMethod = ({error, props}) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  } else if (props) {
    return <Customer viewer={props.viewer}/>;
  }
  return <div>loading...</div>;
};

class App extends Component {
  state = {
    pageNumber: 0,
  };

  onClick = () => {
    const pageNumber = this.state.pageNumber + 1;
    this.setState({pageNumber});
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click to alternate between static text and customer info</button>
        <br/><br/>
        {
          this.state.pageNumber % 2 === 0 ?
            <QueryRenderer environment={environment} query={appRootQuery}
                           render={renderMethod}/>
            :
            <div>Static text no fetch.</div>
        }
      </div>);
  }
}

export default App;
