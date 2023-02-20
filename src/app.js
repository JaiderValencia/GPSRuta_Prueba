const path = require("path");
const express = require("express");
const app = express();

const mainRoutes = require("./routes/mainRoutes");
const recivedRoutes = require("./routes/recivedRoutes");

app.use("/", mainRoutes);

app.use("/recibir", recivedRoutes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
  console.log("Levantado");
});
