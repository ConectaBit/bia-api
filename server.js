const express = require("express");

const porta = 8080;

const app = express();

app.use(express.json());

app.use("/api", require("./src/routes"));

app.listen(porta);

console.log("Server rodando na porta " + porta+ " XD");
