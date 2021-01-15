import { gql } from 'apollo-server';

const typeDefs = gql`
  type Restaurant @key(fields: "id") {
    id: String!
    name: String!
    location: String!
    rating: Float!
    price: String!
    gallery: [String!]
    typename: String!
  }

  extend type Query {
    restaurant(id: String!): Restaurant!
    restaurants: [Restaurant!]
  }
`;

export default typeDefs;
