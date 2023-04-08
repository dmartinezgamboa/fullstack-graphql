const gql = require('graphql-tag')
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
    type User {
        email: Email
        avatar: String
        friends: [Friend]
        account: Int
    }
    
    type Friend {
        relation: String
    }
    
    type Email {
        server: String
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