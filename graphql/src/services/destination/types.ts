import { gql } from "apollo-server";

const typeDefs = gql`
  type Destination @key(fields: "id") {
    id: String!
    title: String!
    text: String!
    location: String!
    temperature: String!
    gallery: [String!],
    typename: String!
  }

  extend type Query {
    destination(id: String!): Destination!
    destinations: [Destination!]
  }
`;

export default typeDefs;