const { GraphQLServer } = require('graphql-yoga')

const Query = require('./resolvers/Query')
const typeDefs = './src/schema.graphql'


const resolvers = {
    Query
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log('the server is running on http://localhost:4000'))

