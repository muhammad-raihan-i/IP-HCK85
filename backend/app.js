require("dotenv").config()
const express = require('express')
const app = express()//function invoke

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Hai Backend</title>
  <style>
    body {
      background-color: pink;
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: sans-serif;
    }
    h1 {
      color: white;
      font-size: 2.5em;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    }
  </style>
</head>
<body>
  <h1>hai, aku backend</h1>
</body>
</html>`)
})

module.exports = app
