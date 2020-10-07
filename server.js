const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");

const schema = require("./schema");

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // graphiql is the client
}));



const PORT = process.env.PORT || 8000;
app.listen(8000, () => console.log(`Server is running on port: ${PORT}`));