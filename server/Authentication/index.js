const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
require('express-async-errors');

require('dotenv').config();
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth')

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/users',userRoutes);
app.use('/api/login',authRoutes);



const port =process.env.PORT ;

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));
