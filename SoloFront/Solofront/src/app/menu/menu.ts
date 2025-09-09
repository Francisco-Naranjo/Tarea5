import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Clientes } from '../clientes/clientes';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,Clientes],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
