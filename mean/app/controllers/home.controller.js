var Home = require('../models/home.model.js');

exports.create = function(req, res) {
    // Create and Save a new home

};

exports.findAll = function(req, res) {
    // Retrieve and return all home from the database.
	res.send({message: "home."});
};

exports.findOne = function(req, res) {
    // Find a single home with a noteId

};

exports.update = function(req, res) {
    // Update a home identified by the noteId in the request

};

exports.delete = function(req, res) {
    // Delete a home with the specified noteId in the request

};