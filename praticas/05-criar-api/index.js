const express = require("express");
const app = express();

// intermediarios
const cors = require("cors");
// habilitar o browser para mandar uma requisição
app.use(cors());
// habilita receber json como corpo de requisição
app.use(express.json());

app.use((req, res, next) => {
  console.log("---### LOG da Requisição ###---");
  console.log("TIME: ", new Date().toLocaleString());
  console.log("METODO: ", res.method);
  console.log("ROTA: ", res.url);
  next();
});

//Roteadores
const PessoasController = require("./routes/PessoasController");
app.use(PessoasController);

// executa
app.listen(3000, () => {
  console.log("Api rodando em htt://localhost:3000");
});
