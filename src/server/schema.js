import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';

const query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    country: {
      type: new GraphQLObjectType({
        name: 'Country',
        fields: {
          name: {type: GraphQLString},
          population: {type: GraphQLInt}
        }
      })
    }
  }
});

export default new GraphQLSchema({query});
