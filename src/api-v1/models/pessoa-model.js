function insere() {}

function lista(params, callback) {
  const objFake = [
    {
      id: 1,
      nome: "Douglas",
      email: "bCtOz@example.com",
      telefone: "11 99999-9999",
      organizacao: null,
      tags: ["cinema", "trabalho"],
    },
  ];

  const err = null;

  callback(err, objFake);
}

function altera() {}

function exclui() {}

export default { insere, lista, altera, exclui };
