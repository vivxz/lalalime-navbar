const Clothings = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Clothings.find()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(404).send(err))
  }
}

module.exports = controller;