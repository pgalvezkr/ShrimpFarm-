'use strict';

var firebase = require('firebase')
var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 9000;
var loadConfiguration = require ('./firebase-config');

if (!global.isConfigurated) {
  var firebaseConfig = {
    apiKey: "AIzaSyAIxj1z23tk_wyxBTSvgjGGs48hnCb6mYg",
    authDomain: "shrimpfarms-9a4d9.firebaseapp.com",
    databaseURL: "https://shrimpfarms-9a4d9.firebaseio.com",
    projectId: "shrimpfarms-9a4d9",
    storageBucket: "shrimpfarms-9a4d9.appspot.com",
    messagingSenderId: "397928447655",
    appId: "1:397928447655:web:0faa1c0d9de45dfbe2e582",
    measurementId: "G-8FB06B3PRD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  global.isConfigurated = true;
  global.firestoreDb = firebase.firestore();
}
// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});
