import { PerguntaService } from './pergunta.service';
import { Component, OnInit } from '@angular/core';
import { Perguntas } from './pergunta.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {
  pergunta: Perguntas[];
  constructor(private PerguntaService: PerguntaService) {
    this.getData();
   }

  ngOnInit() {
    this.PerguntaService.getAll().subscribe(data => {
      this.pergunta = data;
    })
  }

  getData(){
    this.PerguntaService.getData().subscribe(data =>  {
      console.log(data);
    }
      )
  }

}


