const express = require("express");
const todosRoutes = require("./todos.routes");
const pg = require('pg');
require('dotenv').config();
const connectionString =" postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}";
const pool = new pg.Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});
pool.on('connect', () => {
  console.log('Teamwork Database connected successfully!');
});
const app = express();



app.use(express.json());
app.use(todosRoutes);

app.get("/user", (req, res) => {
    return res.json("up");

});
app.listen(3333, ()=> console.log("Server up in 3333"));