import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan Marvel'];
  heroeBorrado: string = "";

  borrarHeroe( array: string[]){
    this.heroeBorrado = array.pop() || "";
  }

}
