const express = require('express');
const { graphql } = require('graphql');
const path=require('path');

// const { graphqlHTTP } = require('express-graphql');

const {ApolloServer}=require('apollo-server-express')

const {loadFilesSync}=require('@graphql-tools/load-files');
const {makeExecutableSchema}=require('@graphql-tools/schema');
const { info } = require('console');


const typesArray=loadFilesSync('**/*',{
    extensions:['graphql'],
});

const resolversArray=loadFilesSync('**/*',{
    extensions:['resolvers.js']
});


async function startApolloServer(){
    const app = express();

    const schema=makeExecutableSchema({
        typeDefs: typesArray,
        resolvers:resolversArray,
    });

    const server= new ApolloServer({
        schema
    })

    await server.start();

    server.applyMiddleware({app, path:'/graphql'})

    app.listen(3000, () => {
        console.log("Running GraphQL server...")
    })

}


startApolloServer();




// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     graphiql: true,
// }))

