    const express = require("express");
    const {graphqlHTTP} = require("express-graphql");

    const schema = require("./schema");

    const app = express();

    app.get('/graphql', graphqlHTTP({
        schema,
        graphiql: true // graphiql is the client
    }));

    const PORT = process.env.PORT || 4532;
    app.listen(4532, () => console.log(`Server is running on port: ${PORT}`));