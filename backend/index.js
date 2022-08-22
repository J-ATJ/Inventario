const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.send('Hola backend');
});

app.listen(8000, function() {
  console.log("Server started at port 8000");
});
