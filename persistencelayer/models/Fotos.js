const mongoose = require('mongoose');

const FotosSchema = new mongoose.Schema(
      {
            link: String
      }
);

module.exports = mongoose.model('Fotos', FotosSchema);