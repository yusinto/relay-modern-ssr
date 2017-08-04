/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type customer_viewer = {|
  +Customer: ?{|
    +email: string;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "customer_viewer",
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
        }
      ],
      "storageKey": "Customer{\"id\":\"cj3xrfkrapzo90174udonmzsh\"}"
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
