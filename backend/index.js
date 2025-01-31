const connetToMongo = require('./db')
connetToMongo();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

// Available routes for api
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const connectToMongo = require('./db');
connectToMongo();

