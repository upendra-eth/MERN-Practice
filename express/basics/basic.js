const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("this server is very basic server created on express");
});

app.get("/help", function (req, res) {
  res.send("If you need any help connect with us at xyz@gmail.com");
});

app.listen(3000);
