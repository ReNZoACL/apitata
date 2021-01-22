const Request = require('request');
const Planeta = require('../models/planeta');
const Especie = require('../models/especie');


module.exports.ObtenerPlanetas = (pid) => new Promise((resolve, reject) => {
    Request.get({
      url: `http://swapi.py4e.com/api/planets/${pid}/`,
      headers: {'content-type' : 'application/json'}
    }, (error, httpResponse, resultado) => {
      if (error) {
        resolve(null);
      } else {
        const body = JSON.parse(resultado);
        const planeta = new Planeta(
          body.name,
          body.rotation_period,
          body.orbital_period,
          body.diameter,
          body.climate,
          body.gravity,
          body.terrain,
          body.surface_water,
          body.population,
          body.residents,
          body.films,
          body.created,
          body.edited,
          body.url
        );
        resolve(planeta);
      }
    });
  });

  module.exports.ObtenerEspecie = (pid) => new Promise((resolve, reject) => {
    Request.get({
      url: `https://swapi.py4e.com/api/species/${pid}/`,
      headers: {'content-type' : 'application/json'}
    }, (error, httpResponse, resultado) => {
      if (error) {
        resolve(null);
      } else {
        const body = JSON.parse(resultado);
        const especie = new Especie(
          body.name,
          body.classification,
          body.designation,
          body.average_height,
          body.skin_colors,
          body.hair_colors,
          body.eye_colors,
          body.average_lifespan,
          body.homeworld,
          body.language,
          body.people,
          body.films,
          body.created,
          body.edited,
          body.url
        );
        resolve(especie);
      }
    });
  });