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

### Agregar componente de ruteo en caso de que no exista en el inicio del proyecto

```
ng generate module app-routing --flat --module=app
```

despues de eso tira puro codigo basura que se reemplaza por el de hero heroes
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
//inport modules
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';


const routes: Routes = [
  { path: '', component: ListarProductoComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo:'', pathMatch:'full' }, /*** Para retornar a la principal cuando url no hace match con nada */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```
![Alt text](images%20md/6%20routing.jpg)

Posterior a eso, en app.component.html agregar
```
<router-outlet></router-outlet>
```

### Configurar gradiente general en css 
nace de web https://uigradients.com/#Netflix
<a href="https://uigradients.com/#Netflix" target="_blank">ui gradiente netflix </a>
![Alt text](images%20md/7%20estilos%20generales%20css.jpg)

### cambiar html del componente listar-productos
```
<!-- Deja un margin top de 5 pixel o algo asi -->
<div class="container mt-5">

    <div class="row">
        <!--deja dos columnas vacias a la izquierda-->
        <div class="col-lg-8 offset-lg-2">
            <div class="card">
                <div class="card-body text-center">
                    <span>LISTADO DE PRODUCTOS</span>
                    <!-- Clase para alinear el boton a la derecha con b5 float-end-->
                    <button class="btn btn-success float-end">NUEVO</button>
                    
                    <!-- Clase para margin top-5 y formato de tabla striped-->
                    <table class="table table-striped mt-5">
                        <thead>
                          <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Ubicacion</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Coca Cola</th>
                            <td>Bebidas</td>
                            <td>Buenos Aires</td>
                            <td>2</td>
                            <td></td>
                          </tr>
                         
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </div>
</div>
```
![Alt text](images%20md/8%20cambio%20component%20html%20de%20listar-productos.jpg)

### Inportar font asome con cdn en index.html
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
se agrega todo en la parte del idex
```
<!doctype html>
<html lang="en">
<head>
  <!--
  <meta charset="utf-8">
-->
  <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">
  <title>Cliente</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```
![Alt text](images%20md/9%20agrega%20fa%20icons%20y%20montserrat.jpg)

### Directiva router link en listar-producto.html
va a irl definida crear-producto desde boton nuevo
#
app/components/listar-producto/listar-producto.component.html
```
 <button class="btn btn-success float-end" routerLink="/crear-producto">NUEVO</button>
 ```
![Alt text](images%20md/10%20router%20link%201.jpg)
![Alt text](images%20md/11%20router%20link%202.jpg)


### Integrar reactiveFormsModule para modulo crear-producto
![Alt text](images%20md/12%20integrar%20reactive%20forms%20module.jpg)
agregar reactive form y form module en app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
despues agregar atributo a la clase 
![Alt text](images%20md/13%20integrar%20form%20groups%20a%20ts%20crear-cliente.jpg)
Despues se llena de la siguiente manera
![Alt text](images%20md/14%20from%20groups%20formbuilder%20y%20validators%20en%20componente%20tds%20crear%20cliente.jpg)
```
import { Component, OnInit } from '@angular/core';
// primero importar formGroup
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  // 2 definir atributo
  productoForm: FormGroup;
  
  //3 Inicializar constructor
  constructor(private fb: FormBuilder) { 
    this.productoForm=this.fb.group({
      producto: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required],

    });

  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm);
  }

}


```

### Enlazar form groups ts a componente html de crear-producto por propeng binding 
![Alt text](images%20md/15%20reactive%20form%20en%20html%20componente%20crear%20producto.jpg) 

```
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-6 offset-lg-3">
            <div class="card">
                <div class="card-body text-center">
                    <span class="titulo">Crear Producto</span>
                    <form class="mt-3" [formGroup]="productoForm" (ngSubmit)="agregarProducto()">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" formControlName="producto" id="producto" >
                            <label for="producto">Producto</label>
                          </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" formControlName="categoria" id="categoria" >
                            <label for="categoria">Categoria</label>
                          </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" formControlName="ubicacion" id="ubicacion" >
                            <label for="ubicacion">Ubicacion</label>
                          </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control form-control-lg" formControlName="precio" id="precio" >
                            <label for="precio">Precio</label>
                          </div>
                          <div class="mb-3">
                            <button class="btn btn-secondary btn-lg float-start" routerLink="/">Volver</button>
                            <button type="submit" class="btn btn-success btn-lg float-end" >Aceptar</button>
                          </div>
                    </form>
                </div>
            </div>
         </div>
    </div>
</div>
```

### Agregar Validaciones con ngIF

![Alt text](images%20md/16%20div%20class%20advertencia%20obligatoriedad.jpg)
en el componente components/crear-producto/crear-producto.component.html
```
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-6 offset-lg-3">
            <div class="card">
                <div class="card-body text-center">
                    <span class="titulo">Crear Producto</span>
                    <form class="mt-3" [formGroup]="productoForm" (ngSubmit)="agregarProducto()">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" formControlName="producto" id="producto" >
                            <label for="producto">Producto</label>
                            <div class="text-danger text-left" *ngIf="productoForm.get('producto')?.hasError('required') && productoForm.get('producto')?.touched ">
                              <span>El nombre del producto es <strong>obligatorio</strong></span>
                            </div>
                          </div>
                          
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" formControlName="categoria" id="categoria" >
                            <label for="categoria">Categoria</label>
                            <div class="text-danger text-left" *ngIf="productoForm.get('categoria')?.hasError('required') && productoForm.get('categoria')?.touched ">
                              <span>El nombre de la categoria es <strong>obligatorio</strong></span>
                            </div>
                          </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-lg" formControlName="ubicacion" id="ubicacion" >
                            <label for="ubicacion">Ubicacion</label>
                            <div class="text-danger text-left" *ngIf="productoForm.get('ubicacion')?.hasError('required') && productoForm.get('ubicacion')?.touched ">
                              <span>El nombre de la ubicacion es <strong>obligatoria</strong></span>
                            </div>
                          </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control form-control-lg" formControlName="precio" id="precio" >
                            <label for="precio">Precio</label>
                            <div class="text-danger text-left" *ngIf="productoForm.get('precio')?.status=='INVALID' && productoForm.get('precio')?.touched ">
                              <span>El precio es <strong>obligatorio</strong></span>
                            </div>
                          </div>
                          <div class="mb-3">
                            <button class="btn btn-secondary btn-lg float-start" routerLink="/">Volver</button>
                            <button type="submit" class="btn btn-success btn-lg float-end" >Aceptar</button>
                          </div>
                    </form>
                </div>
            </div>
         </div>
    </div>
</div>
```

### instalar toastr con npm 
<a href="https://www.npmjs.com/package/ngx-toastr"> toas tr </a>
```
npm install ngx-toastr@14.x --save --force
npm install @angular/animations@12.x --save --force
```
Despues agregar style css a angula.json
![Alt text](images%20md/17%20agregar%20angular.json%20styles%20de%20toastr.jpg)

Seguir los paso para agregar a app.module.ts y despues en el componente a utilizar