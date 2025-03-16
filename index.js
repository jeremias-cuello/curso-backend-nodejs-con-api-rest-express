/*global require*/
const express = require("express");
const app = express();
const PORT = 3_000;

app.get("/products", (req, res) => {
  const products = [
    {id: 1, name: "Product 1", price: 150},
    {id: 2, name: "Product 2", price: 3_210},
    {id: 3, name: "Product 3", price: 1_450},
    {id: 4, name: "Product 4", price: 1_150},
  ];

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = {id, name: "Product Individual", price: 10_000};

  res.json(product);
});

app.put("/products/:id", (req, res) => {
  res.send("Producto reemplazado");
});

app.patch("/products/:id", (req, res) => {
  res.send("Producto actualizado");
});

app.post("/products/:id", (req, res) => {
  res.send("Producto creado");
});

app.delete("/products/:id", (req, res) => {
  res.send("Producto eliminado");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
