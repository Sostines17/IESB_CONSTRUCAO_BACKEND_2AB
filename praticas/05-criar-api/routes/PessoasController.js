const express = require("express");
const router = express.Router();

// mapeamento dos endpoints e a Lógica
// Lista de Pessoas para simular o banco de dados
let pessoas = [
  {
    id: 1,
    nome: "João Pedro",
    cpf: "12345678912",
    email: "joao@pedro.com",
    dataNascimento: "01/01/2000",
  },
  {
    id: 2,
    nome: "Maria Joana",
    cpf: "98765432198",
    email: "maria@pjoana.com",
    dataNascimento: "02/02/2002",
  },
];

//criar
// - POST /pessoas
router.post("/pessoas", (req, res, next) => {});

// Listar Todos
// - GET /pessoas
router.get("/pessoas", (req, res, next) => {
  res.json(pessoas);
});

// Buscar
// - GET /pessoas/{id}
router.get("/pessoas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const pessoa = pessoas.find((p) => p.id == idRecebido);
  if (!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrado!!!" });
  }
  res.json(pessoa);
});

// Editar
// - PUT /pessoas/{id}
router.put("/pessoas:id", (req, res, next) => {});

// Deletar
// - DELETE /pessoas/{id}
router.delete("/pessoas/:id", (req, res, next) => {});

module.exports = router;
