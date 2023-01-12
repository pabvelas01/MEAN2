import { Component, OnInit } from '@angular/core';
// primero importar formGroup
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  // 2 definir atributo
  productoForm: FormGroup;
  
  //3 Inicializar constructor
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
    ) { 
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
    console.log(this.productoForm.status);
    console.log(this.productoForm.get("precio")?.status);
    console.log(this.productoForm.get("precio")?.value);

    const PRODUCTO: Producto = {
      nombre:this.productoForm.get("nombre")?.value,
      categoria: this.productoForm.get("categoria")?.value,
      ubicacion: this.productoForm.get("ubicacion")?.value,
      precio: this.productoForm.get("precio")?.value,
    }
    if(this.productoForm.status=='VALID'){
        this.router.navigate(["/"]);
        this.toastr.success('Exito!', 'Datos Guardados exitosamente!');
    }

  }

}
