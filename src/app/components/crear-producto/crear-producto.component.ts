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
