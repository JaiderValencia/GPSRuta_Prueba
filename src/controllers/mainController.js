const fs = require("fs");

const datos = fs.readFileSync(__dirname + "/datos.json");

const datosConvertidos = JSON.parse(datos);

const controller = {
  viewData: (req, res) => {
    res.render("index", { datos: datosConvertidos });
  },
};

module.exports = controller;
