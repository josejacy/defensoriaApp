
import { ServiceDocService  } from '../service-doc.service';
import { Component, OnInit } from '@angular/core';
import { Documentos } from './../service/api.service';

@Component({
  selector: 'app-documentos-uteis',
  templateUrl: './documentos-uteis.page.html',
  styleUrls: ['./documentos-uteis.page.scss'],
})
export class DocumentosUteisPage implements OnInit {
  documento: Documentos[];
  constructor(private ServiceDocService: ServiceDocService) { 
    this.getData();
  }

  ngOnInit() {
    this.ServiceDocService.getAll().subscribe(data => {
      this.documento = data;
      console.log('entrou');
    })

  }

  getData(){
    this.ServiceDocService.getData().subscribe(data =>  {
      console.log(data);
    }
      )
  }

}
