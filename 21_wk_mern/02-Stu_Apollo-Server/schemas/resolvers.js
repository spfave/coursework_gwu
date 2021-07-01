const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// Defines a object with a Query subobject that contains resolver methods for
// defined query routes in the typeDefs definition
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // Uses mongoose 'Class' model definition to find all classes in MongoDO,
      // returns list of Class objects
      return await Class.find({});
    },
  },
};

module.exports = resolvers;
