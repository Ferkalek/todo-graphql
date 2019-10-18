const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type CompanyType {
        companyName: String!
        phone: String!
    }

    type User {
        name: String!
        mail: String!
    }

    type DataType {
        users: [User!]!
        company: CompanyType!
    }

    input UserInput {
        name: String!
    }

    type Todo {
        id: ID!
        title: String!
        done: Boolean!
        createdAt: String
        updatedAt: String
    }

    type Query {
        data: DataType!
        random(min: Int!, max: Int!, count: Int!): [Float!]!
        getTodos: [Todo!]!
    }

    input TodoInput {
        title: String!
    }

    type Mutation {
        addTestUser(user: UserInput!): User!
        createTodo(todo: TodoInput!): Todo!
        completeTodo(id: ID!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`);