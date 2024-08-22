const mongoose = require('mongoose');

const PerguntasSchema = new mongoose.Schema(
      {
            Pergunta: String,
            Temas: [String],
            Resposta: String
      }
);

module.exports = mongoose.model('Perguntas', PerguntasSchema);