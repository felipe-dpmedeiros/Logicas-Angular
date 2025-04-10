import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio3.component.html',
  styleUrl: './exercicio3.component.css'
})
export class Exercicio3Component {
  idade:number = 1;

  aumentarIdade(event:Event) : void {
    this.idade++;
  }
    diminuirIdade(event:Event) : void {
    if (this.idade > 0) {
    this.idade--;
    }
  }
}
