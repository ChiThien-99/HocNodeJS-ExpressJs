const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const productsRouter = require("./modules/products/products.router");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productsRouter);
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
