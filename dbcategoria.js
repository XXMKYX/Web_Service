var config = require('./bdconfig'); //Instanciando las configuraciones}
const sql = require('mssql'); //Paquete mssql
//Funcion asincrona que nos va a devolver informacion de la DB
async function getCategoria(){
    try {
        let pool = await sql.connect(config);  //Espera la conexion con SQL
        let categorias = await pool.request.query("SELECT *FROM TM_CATEGORIA"); //Traemos la consulta
        return categorias.recordsets; //Retornamos la consulta
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoria : getCategoria
} 