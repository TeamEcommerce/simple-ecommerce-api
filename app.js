'use strict';

var mongoose = require('mongoose');
var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var app = require('express')();
var secret = require('./api/config/secret');
module.exports = app;

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

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
  console.log("listening in port" + port);

});
