import { gql } from 'apollo-server';

const typeDefs = gql`
  type User @key(fields: "id") {
    id: String!
    name: String!
    password: String!
    likedPosts: [String!]
  }

  type Query {
    user(id: String!): User
    login(email: String!, password: String!): User!
  }

  type DeleteMessage {
    status: String!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    updateUser(
      id: String!
      name: String!
      email: String!
      password: String!
    ): User!
    deleteUser(id: String!): DeleteMessage!
    addLikedPosts(postID: String!, userID: String!): User!
  }
`;

export default typeDefs;
