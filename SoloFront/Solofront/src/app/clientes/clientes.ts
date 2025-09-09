import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ICliente } from '../Interfases/icliente';
import { ClienteService } from '../Servicios/cliente-service';

declare const Swal: any;


@Component({
  selector: 'app-clientes',
imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes {
  lista_clientes$!: ICliente[];
 
  constructor(private clienteServicio: ClienteService) {}
 
  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.clienteServicio.todos().subscribe((clientes) => {
      this.lista_clientes$ = clientes;
    });
  }
 
  eliminarCliente(id: number) {
    Swal.fire({
      title: 'Clientes',
      text: 'Esta seguro que desea eliminar este cliente?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#838688ff',
      confirmButtonText: 'Eliminar!!!!!!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.clienteServicio.eliminarcliente(id).subscribe((id) => {
          if (id > 0) {
            this.cargaTabla();
            Swal.fire(
              'Cliente Eliminado!',
              'Gracias por confiar en nuestros servicios!.',
              'success'
            );
          }
        });
      }
    });
  }
 
  variables_sesion(id: number) {
    sessionStorage.setItem('id_cliente', id.toString());
  }
  eliminarvariable() {
    sessionStorage.removeItem('id_cliente');
  }
}
