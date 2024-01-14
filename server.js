const express = require("express");
const dotenv = require("dotenv");
const app = express();

const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand(dotenv.config());

const PORT = process.env.PORT || 5500;
const SERVER = process.env.SERVER || "";
const MainRoute = require("./src/routes/todoroutes");

require("./src/Config/Config")

app.get("/", (req, res) => {
  return res.json("Welcom6");
});

app.use("/", MainRoute);

app.listen(PORT, () => {
  console.log(`Server Running on ${SERVER}`);
});
