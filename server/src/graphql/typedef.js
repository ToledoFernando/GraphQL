import { gql } from "graphql-tag";

export const type = gql`
  type Acount {
    id: Int!
    first_name: String!
    last_name: String!
    email: String
    gender: String
    ip_address: String
  }

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    hello: String!
    personAcount: Int!
    acount: [Acount]
    miProjects: [Project]
    oneProject(_id: ID!): Project
  }

  type Mutation {
    createProject(name: String, description: String): Project
    deleteProject(_id: ID!): Project
  }
`;
