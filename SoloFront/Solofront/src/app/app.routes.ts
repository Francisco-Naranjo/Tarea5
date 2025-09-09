import { Routes } from '@angular/router';
import { Clientes } from './clientes/clientes';
import { Usuarios } from './usuarios/usuarios';
import { NuevoCliente } from './clientes/nuevo-cliente/nuevo-cliente';

export const routes: Routes = [
    {path:'clientes',component:Clientes},
    {path:'clientes/nuevo-cliente',component:NuevoCliente},
    {path:'usuarios',component:Usuarios},
    {path:'**',redirectTo:''}
];