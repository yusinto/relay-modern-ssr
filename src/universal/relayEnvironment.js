import {Environment, Network, RecordSource, Store} from 'relay-runtime';

const GRAPHQL_ENDPOINT = 'https://api.graph.cool/relay/v1/Peerex';
const network = Network.create((operation, variables) =>
    fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => response.json())
);

// responsible for caching
const store = new Store(new RecordSource());

export default new Environment({
    network,
    store,
});
