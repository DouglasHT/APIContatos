export const pessoaSchema = {
  type: "object",
  properties: {
    nome: {
      type: "string",
      description: "Nome da referida pessoa",
    },
    email: {
      type: "string",
      description: "Endereço eletrônico da pessoa",
    },
    telefone: {
      type: "string",
      description: "Telefone da pessoa",
    },
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
  required: ["nome", "email"],
  example: {
    nome: "Douglas",
    email: "bCtOz@example.com",
    telefone: "11 99999-9999",
    tags: ["cinema", "trabalho"],
  },
};
