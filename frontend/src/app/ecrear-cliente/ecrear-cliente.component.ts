import { Component } from '@angular/core';
import { ClienteB } from '../models/cliente';


@Component({
  selector: 'app-ecrear-cliente',
  templateUrl: './ecrear-cliente.component.html',
  styleUrls: ['./ecrear-cliente.component.css']
})
export class EcrearClienteComponent {
  public cli: ClienteB;
  opcion:number =1;


  constructor() {
    this.cli = new ClienteB('', '', '', '', '','','')
  }
  ngOnInit(): void {

  }
}
