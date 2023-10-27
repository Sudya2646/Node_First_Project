const details = require("../model/contactModel")
const express = require('express')
const mongoose = require("mongoose");
const productModel = require("../model/contactModel")

const getContacts = (req, res) => {
  productModel
    .find()
    .then((mongoData) => {
      console.log(mongoData);
      res.send(mongoData);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};


const createContacts = (req, res) => {
  let data = req.body;
  const newProducts = new productModel({
    _id: new mongoose.Types.ObjectId(),
    name: data.name,
    Team: data.Team,
    Game: data.Game,
    Rating: data.Rating,
  });
  newProducts
    .save()
    .then(() => {
      res.send("data added!");
    })
    .catch((err) => {
      console.log(err);
    });
};



const updateContacts = (req, res) => {
  let data = req.body;
  productModel
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: data.name,
          Team: data.Team,
          Game: data.Game,
          Rating: data.Rating,
        },
      }
    )
    .then(() => {
      res.send("Update Product");
    })
    .catch((err) => {
      console.log(err);
    });
};


const deleteContacts = (req, res) => {
  productModel
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("deleted product");
    })
    .catch((err) => {
      console.log(err);
    });
};

const searchContacts = (req, res) => {
  productModel
    .find({ _id: req.params.id })
    .then((mongoData) => {
      console.log(mongoData);
      res.send(mongoData);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};







module.exports = {
  getContacts,
  createContacts,
  updateContacts,
  deleteContacts,
  searchContacts
}