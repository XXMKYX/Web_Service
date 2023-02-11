//Conexion con server
const config = {
    user: 'sa', //Usuario de sql server
    password: '123',
    server: '192.168.0.0',
    database: 'BDTEST',
    oprions:{
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false //Si no funcionan las credenciales de acceso se cambia a true
    }
}