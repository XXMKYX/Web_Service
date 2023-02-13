//Conexion con server
const config = {
    user: 'sa', //Usuario de sql server
    password: 'huevos1',
    server: 'XXMKY',
    database: 'DB_SERVICE1',
    options:{
        trustedconnection: true,
        trustServerCertificate: true,
        enableArithAbort: true,
        synchronize: true,
        encrypt: true //Si no funcionan las credenciales de acceso se cambia a true
        //instancename: 'NEWINSTANCE'
    }
}
//Exportamos las configuraciones para todos los JS
module.exports = config; 