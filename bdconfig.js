//Conexion con server
const config = {
    user: 'sa', //Usuario de sql server
    password: 'huevos1',
    server: 'XXMKY',
    database: 'BDTEST',
    oprions:{
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false //Si no funcionan las credenciales de acceso se cambia a true
        //instancename: 'nombre_instancia'
    }
}
//Exportamos las configuraciones para todos los JS
module.exports = config; 