/*global require*/
const express = require("express");
const app = express();
const PORT = 3_000;

app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
