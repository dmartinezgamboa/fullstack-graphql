const gql = require('graphql-tag')
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
    type User {
        avatar: Avatar
        email: Email
        friends: [Friend]
        account: Int
        pants: Boolean
        job: String
    }
    
    type Friend {
        relation: String
    }
    
    type Email {
        server: String
    }
    
    type Avatar {
        species: String
    }
    
    type Query {
        me: User!
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                email: "daniel@me.com",
                avatar: "http://daniel.png",
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4111)
    .then(() => console.log('on port 4111'))