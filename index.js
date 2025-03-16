/*global require*/
const express = require("express");
const app = express();
const PORT = 3_000;

app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

app.get("/products", (req, res) => {
  res.json({
    name: "Producto 1",
    price: 1_000,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
