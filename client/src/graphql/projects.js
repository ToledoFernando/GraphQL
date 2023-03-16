import { gql } from "@apollo/client";

export const getProjects = gql`
  query {
    miProjects {
      _id
      name
      description
      #   createdAt
      #   updatedAt
    }
  }
`;
