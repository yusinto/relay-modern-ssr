/**
 * @flow
 * @relayHash ede4eaf7fb41bfc179f5aa2530c904fb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appRootQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query appRootQuery {
  viewer {
    ...customer_viewer
    id
  }
}

fragment customer_viewer on Viewer {
  Customer(id: "cj3xrfkrapzo90174udonmzsh") {
    email
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appRootQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "customer_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appRootQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appRootQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "id",
                    "value": "cj3xrfkrapzo90174udonmzsh",
                    "type": "ID"
                  }
                ],
                "concreteType": "Customer",
                "name": "Customer",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": "Customer{\"id\":\"cj3xrfkrapzo90174udonmzsh\"}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query appRootQuery {\n  viewer {\n    ...customer_viewer\n    id\n  }\n}\n\nfragment customer_viewer on Viewer {\n  Customer(id: \"cj3xrfkrapzo90174udonmzsh\") {\n    email\n    id\n  }\n}\n"
};

module.exports = batch;
