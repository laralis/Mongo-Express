import express from "express";
import conectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);
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
