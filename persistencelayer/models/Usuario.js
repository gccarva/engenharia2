const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
      {
            nome: String,
            email: String,
            password: String,
            descricao: String,
            fotolink: String,
            pontuacaos: [{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Pontuacaos'
            }],
            pontos: [{
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Pontos'
            }]
      }
);

module.exports = mongoose.model('Usuarios', UsuarioSchema);