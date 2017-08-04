import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

const Customer = (props) => <div>Got customer: {props.viewer.Customer.email}</div>;

export default createFragmentContainer(Customer, graphql`
  fragment customer_viewer on Viewer {
    Customer(id: "cj3xrfkrapzo90174udonmzsh") {
      email
    }
  }
`);
