import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
//modelo dos dados encontrados em um livro na colecao de livros
const LivroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required:  [true,"O título é obrigatório"] },
    editora: { type: String,  required:  [true,"A editora é obrigatória"] },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema,
  },
  { versionKey: false }
);
//interliga o modelo a colecao encontrada no banco de dados chamada livros
const livro = mongoose.model("livros", LivroSchema);

export default livro;
