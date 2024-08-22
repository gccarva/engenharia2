const mongoose = require('mongoose');

const Temaschema = new mongoose.Schema(
      {
            tema: String,
            perguntas: [String]
      }
);

module.exports = mongoose.model('Temas', Temaschema);