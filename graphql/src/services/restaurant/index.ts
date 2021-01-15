import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import typeDefs from './types';
import resolvers from './resolvers';

const port = process.env.REST || 4003;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`Restaurant service ready at ${url}`);
});
