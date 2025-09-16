// Impoertar o exxpress
const express = require("express");

// Criar uma instância no meu backend com o expre
const app = express();

// Intermediários (Midlewares)
// INtermediário de LOB
//Toda requisição vai passar por ele e imprimir no terminal
//Informações da requisição
app.use((req, res, next) => {
  console.log("Time: ", new Date().toLocaleString());
  console.log("Método: ", req.method);
  console.log("Rota: ", req.url);
  next();
});

// Hello World
// req -> a requisição (os dados da requisição)
// res -> manipulador de resposta
// next -> cha, o próximo intermediário
app.get("/hello", (req, res, next) => {
  // Envio da resposta
  res.send("Hello World ATUALIZADO MEU PRIMEIRO PROJETO");
});

// Endpoint dentro da minha API
app.get("/pessoas", (req, res, next) => {
  const pessoas = [
    {
      id: 1,
      nome: "João Pedro",
    },
    {
      id: 2,
      nome: "Ana Paula",
    },
  ];

  res.json(pessoas);
});

// Executar a aplicação escolendo a porta que ele vai escutando
app.listen(3000, () => {
  console.log("Minha aplicação está rodando em http://localhost:3000");
});
