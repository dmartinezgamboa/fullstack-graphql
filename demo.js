const gql = require('graphql-tag')
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: Int
        avatar: Avatar
        email: Email
        friends: [Friend]
        account: Int
        has_pants: Boolean
        job: String
        life: Life
        work_from_home: Boolean
        watches_tv: Boolean
        weight: Int
        pets: [Pet]
        has_bike: Boolean
        albums: [Album]
        apartment: Boolean
    }
    
    type Album {
        artist: String
        year: Int
    }
    
    type Life {
        length: Int
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
    
    type Pet {
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