const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  # Defines the type 'Class' corresponding to the 'Class' model and the
  # fields that it contains that can be queried
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # Defines a Query "route " named 'classes' that queries on the type 'Class'
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
