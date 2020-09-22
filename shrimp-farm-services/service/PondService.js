'use strict';

const { getPondByFarmid } = require("../controllers/Pond");


/**
 * Management of ponds
 *
 * body Pond 
 * returns ApiResponse
 **/
exports.createPond = function(idFarm,body) {
  return new Promise(async function(resolve, reject) {
    try{
      var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
      let pond = {
        id: body.id,
        name: body.name,
        size: body.size
      };
      //Get farms
      let collection = await global.firestoreDb
        .collection("farms")
        .doc(idFarm)
        .get();     
      let farm = collection.data();
      if (farm.ponds== undefined)
        farm.ponds = [];
      farm.ponds.push(pond);
      farm.totalSize = farm.totalSize + pond.size;
      let saveFarm = await global.firestoreDb
                .collection("farms")
                .doc(idFarm)
                .set(farm);
      response.code = 200;
      response.data = null;
      response.message = "Pond saved succesfully"
      resolve(response);
    } catch (error) {
        console.log("Error", error.message);
        response.code = error.code;
        response.data = null;
        response.message = error.message
        reject(response);
    }
  });
}


/**
 * Delete a pond from database
 *
 * body Pond  (optional)
 * returns ApiResponse
 **/
exports.deletePond = function(idFarm,idPond) {
  return new Promise(async function(resolve, reject) {
    try{
      var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
     
      //Get farms
      let collection = await global.firestoreDb
       .collection("farms")
       .doc(idFarm)
       .get();     
      let farm = collection.data();
      let pondsDeleted = farm.ponds;
      let actualPonds = farm.ponds;
      let sizeFarm = farm.totalSize;
      pondsDeleted.forEach(pond => {
        if (pond.id == idPond){
          let index = pondsDeleted.indexOf(pond);
          actualPonds.splice(index, 1);
          sizeFarm = sizeFarm - pond.size;
        }
      });
      let updatedFinal = await global.firestoreDb
      .collection("farms")
      .doc(idFarm)
      .update({
         name: farm.name,
         nameLocation: farm.nameLocation,
         totalSize: sizeFarm,
         ponds: farm.ponds
      });

      response.code = '201';
      response.data = updatedFinal;
      response.message='Farm updated succesfully';
      resolve(response);

    } catch (error) {
        console.log("Error", error.message);
        response.code = error.code;
        response.data = null;
        response.message = error.message
        reject(response);
    }
  });
}


/**
 * Find pond by farmid
 *
 * farmId String Farm´s id
 * returns ApiResponse
 **/
exports.getPondByFarmid = function(farmId) {
  return new Promise(async function(resolve, reject) {
    var response = {};
    response= {
      "code" : 0,
      "data" : "{}",
      "message" : "message"
    };
    try {
      let collection = await global.firestoreDb
        .collection("farms")
        .doc(farmId)
        .get();     
      let farm = collection.data();
      farm.id = collection.id;
      response.code = '200';
      response.data = farm.ponds;
      response.message='Return farm with id';
      resolve(response);
  }
  catch (error) {
      console.log("Error ", error.message);
      response.code = error.code;
      response.data = null;
      response.message=error.message;
      reject(response);
  }
});
}


/**
 * Find farm by id
 *
 * pondId String Pond´s id
 * returns ApiResponse
 **/
exports.getPondById = function(pondId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "data" : "{}",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the fields of pond
 *
 * body Pond 
 * returns ApiResponse
 **/
exports.updatePond = function(idFarm,body) {
  return new Promise( async function(resolve, reject) {
    let pondUpdate = body;
    var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
    try {
        let updated = await global.firestoreDb
            .collection("farms")
            .doc(idFarm)
            .get();
        if (updated.exists) {
            let farm = updated.data();
            let pondsUpdated = farm.ponds;
            let sizeFarm = 0;
            pondsUpdated.forEach(pond => {
              sizeFarm = sizeFarm + pond.size;
              if (pond.id == pondUpdate.id){
                pond.name = pondUpdate.name;
                pond.size = pondUpdate.size;
              }
            });
            let updatedFinal = await global.firestoreDb
                .collection("farms")
                .doc(idFarm)
                .update({
                   name: farm.name,
                   nameLocation: farm.nameLocation,
                   totalSize: sizeFarm,
                   ponds: pondsUpdated
                });
            response.code = '201';
            response.data = updatedFinal;
            response.message='Farm updated succesfully';
            resolve(response);
        } 
    } catch (error) {
        console.log("Error", error);
        response.code = error.code;
        response.data = null;
        response.message=error.message;
        reject(response);
    }

  });
}


