import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
//modelo dos dados encontrados em um livro na colecao de livros
const LivroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "O título é obrigatório"] },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Criativa", "Alura"],
        message: "A editora {VALUE} não é um valor permitido",
      },
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message:
          "O número de páginas deve estar entre 10 e 5000. O valor fornecido foi: {VALUE}",
      },
    },
    autor: autorSchema,
  },
  { versionKey: false }
);
//interliga o modelo a colecao encontrada no banco de dados chamada livros
const livro = mongoose.model("livros", LivroSchema);

export default livro;
