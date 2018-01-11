import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';

const countries = [
  {
    "name": "Australia",
    "population": 25000000,
  },
  {
    "name": "New Zealand",
    "population": 4700000,
  }
];

const countryType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    name: {type: GraphQLString},
    population: {type: GraphQLInt}
  }
});

const query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    country: {
      type: new GraphQLList(countryType),
      resolve: () => countries,
    }
  }
});

export default new GraphQLSchema({query});
