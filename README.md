### Linea de Codigo para compilar en produccion
```ng build --prod --base-href="./"```
### github page
<a href="https://pabvelas01.github.io/MEAN2/">GitHub Page</a>

### iniciar con terminal cmd
* ruta de archivo y aplicar para abrir con navegador por defecto
```
ng serve --o
```

### Configurar boostrap
Primero instalar por npm package 
```
npm install bootstrap@5.3.0-alpha1
```
![Como queda package](images%20md/1%20npm%20install%20boostrap.jpg)

#### Agregar angular.json linea de css
```
"styles": [
              "src/styles.css", -- ya existe 
              "node_modules/bootstrap/dist/css/bootstrap.min.css" -- se agrega
            ],
```
![angular json](images%20md/2%20angugalr.json.jpg)

#### short key para agregar div con btn en visual studio code
```
button.btn.btn.primary
```

### creacion de primer componente
 * primero creamos las carpetas contenedoras de services, componente y models
 ![Alt text](images%20md/3%20carpetas%20contenedoras.jpg)
* despues, aplicar ng generate component dentro de la carpeta component y el primer componente se llamara crear-producto
```
ng g c components/crear-producto
```
![Alt text](images%20md/4%20primer%20componente.jpg)

### creacion de segundo componente 
```
ng g c components/listar-producto
```

### creacion de servicio producto en carpeta services
```
ng g s services/producto
```

### creacion del modelo manual en carpeta models creada con anterioridad
```
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
```
![Alt text](images%20md/5%20agrega%20primer%20modelo.jpg)