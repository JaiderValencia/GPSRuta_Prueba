const fs = require("fs");

const controller = {
  main: (req, res) => {
    const datoLiteral = {
      dato: [req.params.dato],
    };

    const datoConvertido = JSON.stringify(datoLiteral);

    fs.writeFileSync(__dirname + "/datos.json", datoConvertido);

    res.send(req.params.dato);
  },
};

module.exports = controller;
