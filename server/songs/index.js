const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
require('express-async-errors');

require('dotenv').config();


const app=express();

app.use(cors());
app.use(express.json());




const port =process.env.PORT ;

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));