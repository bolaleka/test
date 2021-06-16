const  { ApolloServer } = require('apollo-server');
const StarWarAPI = require('./datasources/people');
const typeDefs = require('./schema');
const resolvers = require('./resolver');

//Server connection to apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarAPI: new StarWarAPI()
  })
});

  server
    .listen(4000)
    .then(({ url }) => {
    console.log(`🚀 Server running at ${url}`)
});
