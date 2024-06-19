const express = require("express");

const app = express();

app.use('/register',(req, res) => {
  res.json({ message: "mynigga" });
});
app.use('/login',(req, res) => {
  res.json({ message: "mynigga" });
});
app.use('/test',(req, res) => {
  res.json({ message: "mynigga" });
});


app.listen(8000);
