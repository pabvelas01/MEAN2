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
