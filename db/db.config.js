const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const db = process.env.DATABASE_URI

let dbName = 'studentdb'

// const db = `mongodb+srv://user1:Admin123@cluster0.1pd8r.mongodb.net/${dbName}`;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected..."));
