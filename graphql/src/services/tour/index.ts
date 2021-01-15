import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import typeDefs from './types';
import resolvers from './resolvers';

const port = process.env.TOUR || 4004;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port }).then(({ url }) => {
  console.log(`Tour service ready at ${url}`);
});
