const express = require('express');
const cors = require("cors");
const mongoose=require('mongoose');
require("dotenv").config();
const app = express();
const Path = require("path");
const SongsRoutes = require('./Routes/songsadd');
const AuthRoutes = require('./Routes/Auth');
const ArtistRoutes = require('./Routes/artistadd');

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(Path.resolve(__dirname, "public")));
// routes
app.use("/api/songs", SongsRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/artist", ArtistRoutes);
//for data search
 app.get('/search/:key',async (req,res)=>{
     let data = await User.find({
        "$or":[
            {Name:{$regex:req.params.key}},
            {phone:{$regex:req.params.key}}
        ]
     })
    res.send(data); 
})

const port = process.env.PORT || 5050;


mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));


