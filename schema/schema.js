var { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);
