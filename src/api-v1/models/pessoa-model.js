import db from "../utils/db";

function insere(obj, callback) {
  db.pessoasDB.insert(obj, callback);
}

function lista(params, callback) {
  //   const objFake = [
  //     {
  //       id: 1,
  //       nome: "Douglas",
  //       email: "bCtOz@example.com",
  //       telefone: "11 99999-9999",
  //       organizacao: null,
  //       tags: ["cinema", "trabalho"],
  //     },
  //   ];
  // const err = null;

  // callback(err, objFake);

  db.pessoasDB.find({}, callback);
}

function altera() {}

function exclui() {}

export default { insere, lista, altera, exclui };
