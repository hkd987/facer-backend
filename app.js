import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

// The GraphQL schema in string form
import typeDefs from './src/schema'
// The resolvers
import resolvers from './src/resolvers'
// The models
import models from './src/models'

// private info setup
require('dotenv').config()
const PORT = process.env.PORT || 5008
const ENDPOINT = process.env.ENDPOINT || '/graphql'
const SECRET = process.env.SECRET || 'sfgsfgtrewtgnasvksdafnvsdfkgnakfga'
const SECRET2 = process.env.SECRET2 || 'vnmvnbmioyiukhlhjeqwrewqzcxvczxvfgsd'

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()
app.use(bodyParser.json())

// The GraphQL endpoint && GraphiQL, a visual editor for queries
app.use(ENDPOINT, graphqlExpress({ schema,
  context: {
    models,
    token: {
      id: 1 // will be passed as a web token
    },
    SECRET,
    SECRET2
  }
}))

app.use('/graphiql', graphiqlExpress({ endpointURL: ENDPOINT }))

app.get('/', (req, res) => { res.send('WE ARE LIVE') })

models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express is up on ${PORT}`)
  })
})
