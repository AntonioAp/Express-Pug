const express = require("express");
const router = require('./controllers/index')

const app = express();
const port = 3000;

//motor de vistas
app.set('view engine','pug');
app.set('views','./views');


//usar el router
app.use('/',router);

