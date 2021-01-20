/* VARIABLES E IMPORTACIONES */
const express = require('express'); //requiero el modulo de express
const app = express();
const port = 4000;

const indexRouter = require('./routes/indexRouter');
const autosRouter = require('./routes/autosRouter');
const sucursalesRouter = require('./routes/sucursalesRouter');
const adminRouter = require('./routes/adminRouter');

/* CONFIGURACIONES */
app.set('view engine','ejs'); //le digo a express que el motor de vistas es EJS
app.set('views',__dirname + '/views'); //configuro la carpeta donde van a estar guardadas las vistas

app.use(express.static(__dirname + '/public')); //configuro los recursos estaticos

/* RUTAS */
app.use('/',indexRouter);
app.use('/autos',autosRouter);
app.use('/sucursales',sucursalesRouter);
app.use('/admin',adminRouter);








app.listen(port,()=>console.log('El servidor está corriendo en el puerto ' + port))