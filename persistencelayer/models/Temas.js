const mongoose = require('mongoose');

const Temaschema = new mongoose.Schema(
      {
            tema: String,
      }
);

module.exports = mongoose.model('Temas', Temaschema);