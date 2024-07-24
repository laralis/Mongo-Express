import ErroBase from "./ErroBase.js";
class RequisicaoIncorreta extends ErroBase {
  constructor(mesagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mesagem, 400);
  }
}
export default RequisicaoIncorreta;
