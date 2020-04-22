var express = require("express");
var app = express();
const { exec } = require("child_process");

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    } else {
      setoutPut(stdout);
    }
  });
  function setoutPut(input) {
    res.render("index", { input });
  }
});

app.listen(3000);
