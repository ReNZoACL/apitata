module.exports = class Especie {
    constructor(
        pnombre, pclasificacion, pdesignacion, paltura_media, pcolores_piel, pcolores_cabello, pcolores_ojos, ppromedio_vida,
        pmundo_natal, pidioma, ppersonas, pPeliculas, pcreado, peditado, purl
    ) {
        this.nombre = pnombre;
        this.clasificacion = pclasificacion;
        this.designacion = pdesignacion;
        this.altura_media = paltura_media;
        this.colores_piel = pcolores_piel;
        this.colores_cabello = pcolores_cabello;
        this.colores_ojos = pcolores_ojos;
        this.promedio_vida = ppromedio_vida;
        this.mundo_natal = pmundo_natal;
        this.idioma = pidioma;
        this.personas = ppersonas;
        this.Peliculas = pPeliculas;
        this.creado = pcreado;
        this.editado = peditado;
        this.url = purl;
    }
}