import ErroBase from "./ErroBase.js";

class NaoENcontrado extends ErroBase {
  constructor(mensagem = "Pagina não encontrada") {
    super(mensagem, 404);
  }
}
export default NaoENcontrado;
