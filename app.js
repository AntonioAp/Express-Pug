const express = require("express");
const router = require('./controllers/index')
const path = require('path')

const app = express();
const port = 3000;

app.use("/public", express.static(path.join(__dirname, 'public')));


//motor de vistas
app.set('view engine','pug');
app.set('views','./views');

//usar el router
app.use('/',router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})