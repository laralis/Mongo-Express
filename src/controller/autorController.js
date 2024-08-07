import NaoENcontrado from "../erros/Erro404.js";
import { autor } from "../models/index.js";
class AutorController {
  static async listarAutores(req, res, next) {
    try {
      const listaAutores = autor.find({});
      req.resultado = listaAutores;
      next();
    } catch (erro) {
      next(erro);
    }
  }
  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NaoENcontrado("Id do autor não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }
  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndUpdate(id, req.body);
      if (autorEncontrado !== null) {
        res.status(200).json({ message: "autor atualizado" });
      } else {
        next(new NaoENcontrado("Id do autor não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }
  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndDelete(id);
      if (autorEncontrado) {
        res.status(204).json({ message: "autor deletado" });
      } else {
        next(new NaoENcontrado("Id do autor não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }
}
export default AutorController;
