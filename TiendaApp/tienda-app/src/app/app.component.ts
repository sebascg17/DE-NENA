import { Component } from '@angular/core';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoriasComponent, ProductosComponent],
  template: `
    <h1>DE NENA</h1>
    <app-categorias></app-categorias>
    <hr>
    <app-productos></app-productos>
  `
})
export class AppComponent {}
