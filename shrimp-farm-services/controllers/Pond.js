'use strict';

var utils = require('../utils/writer.js');
var Pond = require('../service/PondService');

module.exports.createPond = function createPond (req, res, next) {
  var idFarm = req.swagger.params['idFarm'].value;
  var body = req.swagger.params['body'].value;
  Pond.createPond(idFarm,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePond = function deletePond (req, res, next) {
  var idFarm = req.swagger.params['idFarm'].value;
  var idPond = req.swagger.params['idPond'].value;
  Pond.deletePond(idFarm,idPond)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPondByFarmid = function getPondByFarmid (req, res, next) {
  var farmId = req.swagger.params['farmId'].value;
  Pond.getPondByFarmid(farmId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPondById = function getPondById (req, res, next) {
  var pondId = req.swagger.params['pondId'].value;
  Pond.getPondById(pondId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePond = function updatePond (req, res, next) {
  var idFarm = req.swagger.params['idFarm'].value;
  var body = req.swagger.params['body'].value;
  Pond.updatePond(idFarm,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
