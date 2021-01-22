module.exports = class Planeta {
    constructor(
         pnombre, pperiodo_rotacion, pperiodo_orbital, pdiametro, pclima, pgravedad, pterreno, psuperficie_agua,
         ppoblacion, presidentes, ppeliculas, pcreado ,peditado ,purl
    ) {
         this.nombre = pnombre;
         this.periodo_rotacion = pperiodo_rotacion;
         this.periodo_orbital = pperiodo_orbital;
         this.diametro = pdiametro;
         this.clima = pclima;
         this.gravedad = pgravedad;
         this.terreno = pterreno;
         this.superficie_agua = psuperficie_agua;
         this.poblacion = ppoblacion;
         this.residentes = presidentes;
         this.peliculas = ppeliculas;
         this.creado = pcreado;
         this.editado = peditado;
         this.url = purl;
    }
}