'use strict';

var mongoose = require('mongoose');
var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();
var secret = require('./api/config/secret');
var multer  = require('multer');
var mime = require('mime');

module.exports = app;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype))
  }
})

var upload = multer({ storage: storage })

mongoose.connect(secret.database, function(err){
  if(err) {
    console.log("Make sure the database server is running " + err);
  } else {
    console.log("Connected to the database");
  }
});

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // Generic middleware for file upload
  app.use(upload.single('source'));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("listening in port => " + port);

});
