const express = require('express')
const mongoose = require('mongoose')

const app = express();
require('dotenv').config();

const port = process.env.port || 5000;

app.use(express.json());

const db = process.env.MONGO_URI

const connection = async() => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("mongodb is now connected")
  } catch (error) {
    console.log(error)
  }
}

connection();

mongoose.set('useFindAndModify', false);

app.listen(port, ()=> console.log(`listening on port ${port}`))