import mongoose, { mongo } from "mongoose";

//usa o mongoose para conectar o mongodb no projeto atraves desse link de autenticacao
async function conectNaDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}
export default conectNaDatabase;
