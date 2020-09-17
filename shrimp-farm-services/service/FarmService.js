'use strict';


/**
 * Management of farms
 *
 * body Farm 
 * returns ApiResponse
 **/
exports.createFarm = function(body) {
  return new Promise(async function(resolve, reject) {
    try{
      var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
      let farm = {
        name: body.name,
        totalSize: body.totalSize,
        nameLocation: body.nameLocation,
        latitude: body.latitude,
        longitude: body.longitude,
        ponds: body.ponds
      };
      let saveFarm = await global.firestoreDb
                .collection("farms")
                .add(farm);
      response.code = 200;
      response.data = saveFarm;
      response.message = "Farm saved succesfully"
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
 * Delete a farm from database
 *
 * body Farm  (optional)
 * returns ApiResponse
 **/
exports.deleteFarm = function(body) {
  return new Promise(async function(resolve, reject) {
    try{
      var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
      console.log(body);
      let farm = {
        id: body.id,
        name: body.name,
        totalSize: body.totalSize,
        nameLocation: body.nameLocation,
        latitude: body.latitude,
        longitude: body.longitude,
        ponds: body.ponds
      };
      console.log(farm);
      let deleteFarm = await global.firestoreDb
                .collection("farms")
                .doc(farm.id)
                .delete()
      response.code = 200;
      response.data = deleteFarm;
      response.message = "Farm deleted succesfully"
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
 * Find farm by id
 *
 * farmId String Farm´s id
 * returns ApiResponse
 **/
exports.getFarmById = function(farmId) {
  return new Promise(async function(resolve, reject) {
      var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
      //Consultar las granjas 
      let farms = [];
      try {
        let collection = await global.firestoreDb
          .collection("farms")
          .doc(farmId)
          .get();     
        let farm = collection.data();
        farm.id = collection.id;
        response.code = '200';
        response.data = farm;
        response.message='Return farm with id';
        resolve(response);
    }
    catch (error) {
        console.log("Error al consultar servicios ", error.message);
        response.code = error.code;
        response.data = null;
        response.message=error.message;
        reject(response);
    }
  });
}


/**
 * Delete a farm from database
 *
 * returns ApiResponse
 **/
exports.getFarms =function() {
  return new Promise(async function(resolve, reject) {
      var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
      //Consultar las granjas 
      let farms = [];
      try {
        let getCollections = await global.firestoreDb
            .collection("farms")
            .get();
        getCollections.forEach(function (service) {
            let data = service.data();
            let farm = {
                id: service.id,
                name: data.name,
                totalSize: data.totalSize,
                nameLocation: data.nameLocation,
                latitude: data.latitude,
                longitude: data.longitude,
                ponds: data.ponds
            }
            farms.push(farm);
        });
      response.code = '200';
      response.data = farms;
      response.message='Returnes farms with out error';
      resolve(response);
    }
    catch (error) {
        console.log("Error al consultar servicios ", error.message);
        response.code = error.code;
        response.data = null;
        response.message=error.message;
        reject(response);
    }
  });
}


/**
 * Get total size of Farm
 *
 * farmId String Farm´s id
 * returns ApiResponse
 **/
exports.getTotalSize = function(farmId) {
  return new Promise(async function(resolve, reject) {
    var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
      //Consultar las granjas 
      let farms = [];
      let totalSize = 0;
      try {
        let collection = await global.firestoreDb
          .collection("farms")
          .doc(farmId)
          .get(); 
        
        let farm = collection.data();
        farm.ponds.forEach(function(pond){
            totalSize = totalSize +pond.size;
        });
        response.code = '200';
        response.data = totalSize;
        response.message='Return total size of Farm';
        resolve(response);
    }
    catch (error) {
        console.log("Error al consultar servicios ", error.message);
        response.code = error.code;
        response.data = null;
        response.message=error.message;
        reject(response);
    }
  });
}


/**
 * Update the fields of farm
 *
 * body Farm 
 * returns ApiResponse
 **/
exports.updateFarm = function(body) {
  return new Promise( async function(resolve, reject) {
    let farm = body;
    var response = {};
      response= {
        "code" : 0,
        "data" : "{}",
        "message" : "message"
      };
    try {

      console.log(farm.id);
        let updated = await global.firestoreDb
            .collection("farms")
            .doc(farm.id)
            .get();
        if (updated.exists) {
            let updatedFinal = await global.firestoreDb
                .collection("farms")
                .doc(updated.id)
                .set({
                    name: farm.name,
                    nameLocation: farm.nameLocation,
                    totalSize: farm.totalSize,
                    latitude: farm.latitude,
                    longitude:farm.longitude
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

