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
router.post("/pessoas", (req, res, next) => {
  const { nome, cpf, email, dataNascimento } = req.body;
  // validar se os dados vinheram
  if (!nome || !cpf || !email || !dataNascimento) {
    return res
      .status(400)
      .json({ error: "nome, cpf, email, dataNascimento são obrigatórios !!!" });
  }
  // validar se o CPF jáexiste
  const pessoa = pessoas.find((pessoa) => pessoa.cpf == cpf);
  if (pessoa) {
    return res.status(400).json({ error: "CPF já cadastrado!!!" });
  }
  // cadastrar a nova pessoa na lista
  const novaPessoa = {
    id: Date.now(),
    nome,
    cpf,
    email,
    dataNascimento,
  };
  //inserir a nova pessoa mantada na lista
  pessoas.push(novaPessoa);
  res.status(201).json({ mensagem: "Pessoa cadastrada!!!", novaPessoa });
});

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

// Editar Atualizar
// - PUT /pessoas/{id}
router.put("/pessoas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const { nome, email, dataNascimento } = req.body;
  // validar se os dados vieram
  if (!nome || !email || !dataNascimento) {
    return res
      .status(400)
      .json({ error: "nome, email e dataNascimento são obrigatórios!!!" });
  }
  // validar se a pessoa com aquele ID existente na lista
  const pessoa = pessoas.find((pessoa) => pessoa.id == idRecebido);
  if (!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada!!!" });
  }

  pessoa.nome = nome;
  pessoa.email = email;
  pessoa.dataNascimento = dataNascimento;
  res.json({ message: "Dados atualizado com sucesso!!!" });
});

// Deletar
// - DELETE /pessoas/{id}
router.delete("/pessoas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const pessoa = pessoas.find((pessoa) => pessoa.id == idRecebido);
  if (!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada!" });
  }
  // sobrescreve a lista com uma nova
  pessoas = pessoas.filter((pessoa) => pessoa.id != idRecebido);

  res.json({ message: "Pessoa excluida com sucesso!!" });
});

module.exports = router;
