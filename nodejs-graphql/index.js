const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const MongoClient = require('mongodb').MongoClient;
const mysqlDatabase = require('./database')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

client.connect(function (err) {
    console.log("MONGOdb connected");
    db = client.db("test"); //mongodb database name
});


// Some fake data
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { 
                books: [Book],
                items:[Item],
                articles:[article],
                articleById(id: Int): article
                }
                
  type Book { 
                title: String, 
                author: String }
  type Item { 
               _id: Int,
               item: String,
               description: String
               }
  type article {
            articleId: Int,
            title: String,
            category: String
  }
`;

// The resolvers
const resolvers = {
    Query: {
        books: () => {
            books
        },
        items: async () => {
            values = await db.collection('items').find().toArray().then(res => {
                return res
            });
            return values
        },
        articles: async () => mysqlDatabase.articles.findAll(),
        articleById: async (obj, args, context, info) =>
            mysqlDatabase.articles.findByPk(args.id)
    },

};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql',
    bodyParser.json(), graphqlExpress({schema}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// Start the server
app.listen(8080, () => {
    console.log('Go to http://localhost:8080/graphiql to run queries!');
});