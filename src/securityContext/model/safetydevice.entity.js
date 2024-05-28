export class SafetydeviceEntity {
    constructor(id = 0, tipo = "", marca = "", modelo = "", imagen = "", collectionId = 0, rating = 0, precio = 0, descripcion = "") {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.collectionId = collectionId;
        this.rating = rating;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}
