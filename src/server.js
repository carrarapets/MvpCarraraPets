const express = require("express");
const todosRoutes = require("./todos.routes");
const cors = require("cors")
const pg = require('pg');
require('dotenv').config();
const isProduction = process.env.NODE_ENV ==='production';
const connectionString ="postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}";
const pool = new pg.Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});
pool.on('connect', () => {
  console.log('Teamwork Database connected successfully!');
});
const app = express();
app.use(cors())



app.use(express.json());
app.use(todosRoutes);
app.get("/", (req, res) => {
    return res.json("hello word");

});
app.get("/usere", (req, res) => {
    return res.json("up");

});
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("Server up in "+port));