const { gql } = require('apollo-server');

// Define schema for API to populate data field
const typeDefs = gql`

type Query {
    person(name: String!): Person
    page(id: ID): Page
}

type Results {
  name: String
  height: String
  mass: String
  gender: String
  homeworld: String
}

type Person {
  next: String
  previous: String
  results: [Results!]!
}

type Page {
  next: String
  previous: String
  results: [Results!]!
}

`;

module.exports = typeDefs;