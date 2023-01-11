export class Producto{
    _id?: number; /* es de tipo ? opcional el parametro*/
    nombre:string;
    categoria:string;
    ubicacion: string;
    precio: number;

    constructor(nombre:string, categoria:string, ubicacion:string,precio:number){
        this.nombre=nombre;
        this.categoria=categoria;
        this.ubicacion=ubicacion;
        this.precio=precio
    }
}