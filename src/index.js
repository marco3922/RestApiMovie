const express = require('express');
const connectToDB = require('./db');
const routes = require('./network/routes');

const app = express();
const PORT = 5000;
const url = 'mongodb+srv://marmez:apinew@cluster0.x4vv6.mongodb.net/?retryWrites=true&w=majority'

//middlewares
app.use(express.json());

// DB
connectToDB(url)

// routes
routes(app)



app.listen(PORT, () => console.log(`Server listened on port http://localhost:${PORT}`))
