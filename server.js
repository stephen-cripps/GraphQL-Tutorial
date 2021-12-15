const express = require("express");
const expressGraphQl = require("express-graphql").graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Hello_World",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World",
      },
    }),
  }),
});

app.use(
  "/graphql",
  expressGraphQl({
    schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server Running"));
