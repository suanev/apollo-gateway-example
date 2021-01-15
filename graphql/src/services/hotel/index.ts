import { buildFederatedSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server";
import typeDefs from './types';
import resolvers from './resolver';

const port = process.env.HOTEL || 4002;

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  });
  
  server.listen({ port }).then(({ url }) => {
    console.log(`Hotel service ready at ${url}`);
  });