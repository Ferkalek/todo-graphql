const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type PurchaseTyp {
        itemName: String!
        price: Int!
        count: Int!
    }

    type UserType {
        name: String!
        mail: String!
        purchases: [PurchaseTyp!]!
    }

    type CompanyType {
        companyName: String!
        phone: String!
    }

    type DataType {
        users: [UserType!]!
        company: CompanyType!
    }

    type Query {
        data: DataType
    }
`);