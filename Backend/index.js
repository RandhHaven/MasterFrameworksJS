'use strict';

var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',{useNewUrlParser: true})
    .then(() => {
        console.log('Conexion a Mong BD exitosa!!!');
    });