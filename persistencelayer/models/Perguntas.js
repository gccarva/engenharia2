const mongoose = require('mongoose');

const PerguntasSchema = new mongoose.Schema(
      {
            Pergunta: String,
            temas: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Tema'
            }],
            Resposta: String
      }
);

module.exports = mongoose.model('Perguntas', PerguntasSchema);