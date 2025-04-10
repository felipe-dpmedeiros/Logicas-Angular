import { CommonModule } from '@angular/common';
import { Value } from './../../../../node_modules/regjsparser/parser.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio1.component.html',
  styleUrl: './exercicio1.component.css'
})
export class Exercicio1Component {
  mes:number = 1;

  trocarValor(event:Event) {
    const elementoSelecionado = event.target as HTMLSelectElement
    this.mes = parseInt(elementoSelecionado.value);
  }
}
