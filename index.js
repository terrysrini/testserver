const express =require('express');
require("dotenv").config();
require("./config/database").connect();
const app = express();
const router = express.Router();


app.use('/auth', require('./auth'));
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log('Server running'))