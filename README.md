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