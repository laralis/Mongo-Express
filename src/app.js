import express from "express";
import conectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);
//conexao com o banco
const conexao = await conectNaDatabase();
conexao.on("error", (erro) => {
  console.error("Erro de conexão: ", erro);
});
conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});


app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(204).send("Livro removido com sucesso");
});
export default app;
