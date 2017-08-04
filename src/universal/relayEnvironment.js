import {Environment, Network, RecordSource, Store, QueryResponseCache} from 'relay-runtime';

const GRAPHQL_ENDPOINT = 'https://api.graph.cool/relay/v1/Peerex';
const cache = new QueryResponseCache({size: 100, ttl: 100000});

const network = Network.create((operation, variables) => {
    const cachedData = cache.get('appRootQuery', variables);
    if (cachedData) {
      console.log(`cache hit`);
      return cachedData;
    }

    console.log(`cache miss`);
    return fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      const data = response.json();
      cache.set('appRootQuery', variables, data);
      return data;
    });
  }
);

// responsible for caching
const store = new Store(new RecordSource());

export default new Environment({
  network,
  store,
});
