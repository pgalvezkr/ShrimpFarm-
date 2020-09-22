'use strict';

var utils = require('../utils/writer.js');
var Farm = require('../service/FarmService');

module.exports.createFarm = function createFarm (req, res, next) {
  var body = req.swagger.params['body'].value;
  Farm.createFarm(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFarm = function deleteFarm (req, res, next) {
  var idFarm = req.swagger.params['idFarm'].value;
  Farm.deleteFarm(idFarm)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getFarmById = function getFarmById (req, res, next) {
  var farmId = req.swagger.params['farmId'].value;
  Farm.getFarmById(farmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFarms = function getFarms (req, res, next) {
  Farm.getFarms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTotalSize = function getTotalSize (req, res, next) {
  var farmId = req.swagger.params['farmId'].value;
  Farm.getTotalSize(farmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFarm = function updateFarm (req, res, next) {
  var body = req.swagger.params['body'].value;
  Farm.updateFarm(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
