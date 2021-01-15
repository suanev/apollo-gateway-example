import { gql } from 'apollo-server';

const typeDefs = gql`
  type Hotel @key(fields: "id") {
    id: String!
    name: String!
    location: String!
    rating: Float!
    price: Float!
    description: String!
    gallery: [String!]
    typename: String!
  }

  extend type Query {
    hotel(id: String!): Hotel!
    hotels: [Hotel!]
  }
`;

export default typeDefs;
