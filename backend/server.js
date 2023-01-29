const express = require("express");
const authRoute = require("./routes/auth");
const app = express();

app.get("/auth", authRoute);
app.get("/", (req, res) => {
  res.write("<p>Hello</p>");
  res.send();
});
app.listen(3000, () => {
  console.log("server is listening");
});
