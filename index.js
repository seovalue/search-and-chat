const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const config = require("./server/config/keys");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users/login',require('./server/routes/users/login'));
app.use('/api/dialogflow', require('./server/routes/dialogflow'));
app.use('/api/latest',require('./server/routes/latest'));
app.use('/api/related',require('./server/routes/related'));
app.use('/api/news',require('./server/routes/news'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});
