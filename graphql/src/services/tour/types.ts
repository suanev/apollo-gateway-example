import { gql } from 'apollo-server';

const typeDefs = gql`
  type Tour @key(fields: "id") {
    id: String!
    name: String!
    duration: String!
    location: String!
    rating: Float!
    price: Float!
    gallery: [String!]
    typename: String!
  }

  extend type Query {
    tour(id: String!): Tour!
    tours: [Tour!]
  }
`;

export default typeDefs;
