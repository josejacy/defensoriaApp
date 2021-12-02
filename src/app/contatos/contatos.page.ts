import { Component, OnInit } from '@angular/core';
import { contatos } from './contato.service';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  contato: contatos[];
  constructor(private ContatoService: ContatoService) {
    this.getData();
   }

  ngOnInit() {
    this.ContatoService.getAll().subscribe(data => {
      this.contato = data;
    })
  }

  getData() {
    this.ContatoService.getData().subscribe(data =>{
    })
  }

}
