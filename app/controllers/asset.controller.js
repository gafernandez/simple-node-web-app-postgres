const db = require("../models");
const Tutorial = db.asset;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.id){
      res.status(400).send({
          message: "Content can not be empty!"
      })
  }
  const asset = {
      symbol: req.body.symbol,
      name: req.body.name,
      type: req.body.type
  }
  Asset.create(asset)
    .then(data => {res.send(data)})
    .catch(err => {
        res.status(500).send({
            message: err.message 
        })
    })
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};