const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuariosSchema = new mongoose.Schema({
  nombre: String,
  apellido: String
}, { collection: 'usuarios' });

const Usuarios = mongoose.model('Usuarios', UsuariosSchema);
module.exports =Usuarios;