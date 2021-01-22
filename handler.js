'use strict';
const dbMySql = require('./database/MySql');
const ApiStarWars = require('./src_externo/apiStarWars');
const Persona = require('./models/persona');

module.exports.MostrarPlaneta = async (event) => {
  const id = event.pathParameters.id;
  const serviceESW = await ApiStarWars.ObtenerPlanetas(id);
  return {
    statusCode: 200,
    body: JSON.stringify(serviceESW)
  }
}

module.exports.MostrarEspecie = async (event) => {
  const id = event.pathParameters.id;
  const serviceESW = await ApiStarWars.ObtenerEspecie(id);
  return {
    statusCode: 200,
    body: JSON.stringify(serviceESW)
  }
}

module.exports.MostrarDatos = async (event) => {
  const id = event.pathParameters.id;
  const res = await dbMySql.MostrarPersona({id : id});
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

module.exports.RegistrarDatos = async (event) => {
  let persona = new Persona();
  persona = JSON.parse(event.body);
  const res = await dbMySql.RegistrarPersona(persona);  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(persona),
  };  
}