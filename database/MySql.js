'use strict';
const mysql = require('mysql');
const SQLQuery = require('../models/query');
const configBD = {
    host : 'host.dom',
    database : 'database',
	port : 0000,
	user : 'usr_prod',
	password : 'p123'
}

module.exports.MostrarPersona = (param) => new Promise((res, rej) => {   
	const cmd = new SQLQuery('USP_SEL_PERSONA', param); 
    const squery = `CALL ${cmd.comandText} (?)`;
	const myData = [];	
	const connection = mysql.createPool(configBD);
	connection.query(squery,[cmd.params.id],  function (error, rows, fields) {
	    if (error) {
	        connection.end();
		} else {
			const data = rows[0];
			for(let x=0; x < data.length; x++) {
				const sdatos = JSON.stringify(data[x]);
				myData.push(sdatos);
			};
			connection.end();			
			res(myData);
		}
	});
});

module.exports.RegistrarPersona = (param) => new Promise((res, rej) => {    
	const cmd = new SQLQuery('USP_INS_PERSONA', param);
	const squery = `CALL ${cmd.comandText} (?,?,?,?)`;	
	const connection = mysql.createPool(configBD);
	connection.query(
		squery,
		[param.id, param.nombres, param.apellidos, param.sexo],
		function (err, rows, fields) {
	    	if (err) {
	    		console.log('error', err);
	        	connection.end();
			} else {							
				console.log('agregado');
				res({ result: "OK", persona: param});
			}
		}
	);
});

  
