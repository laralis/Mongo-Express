import NaoEncotrado from "../erros/Erro404.js";

function manipulador404(req, res, next) {
  const erro404 = new NaoEncotrado();
  next(erro404);
}
export default manipulador404;
