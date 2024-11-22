

/*
express.bodyParser() is no longer bundled as part of express. 
You need to install it separately before loading.
Install body-parser 
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const movieslist=require('./data/movies-info.json')
const port = 3004;
const cors = require('cors');

app.use(cors());

// create a application/json parser
const jsonParser = bodyParser.json();
app.post("/login", jsonParser, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if(username=="trump" && password=="makeUSAGreatAgain"){
    res.status(200);
    res.send(`Welcome  ${username}`);
  }else{
    res.status(400);
    res.send(`error`); 
  }
});


app.post("/signup", jsonParser, (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.status(200);
  res.send(`Welcome  ${username}`);
});


app.get("/logout", jsonParser, (req, res) => {
  res.status(200);
  res.send(`Success`);
});


app.get("/movies/list", jsonParser, (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json"); 
  res.send(JSON.stringify(movieslist));
});
  



app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
