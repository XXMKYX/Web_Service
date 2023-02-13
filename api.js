const bdcategoria = require('./dbcategoria');
//Declarando las dependencias
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
//Para enviar POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);  //Ruta principal

//Consulta todas las categorias
router.route('/categoria').get((request,response)=>{
    bdcategoria.getCategoria().then(result => {
        console.log(result);
        response.json(result[0]);
    })
})

var port = process.env.PORT || 8090; //Puerto para pruebas de entrega de paquetes 
app.listen(port);  //Inicio del servicio
console.log('Iniciando en el puerto: ' + port);
