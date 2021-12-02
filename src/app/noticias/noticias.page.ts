import { Noticias } from './../service/service-noticia.service';
import { Component, OnInit } from '@angular/core';
import { ServiceNoticiaService } from './../service/service-noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticia: Noticias[];
  constructor(private ServiceNoticiaService: ServiceNoticiaService) { }

  ngOnInit() {
    this.ServiceNoticiaService.getAll().subscribe(data => {
      this.noticia = data;
    })
  }

  getData(){
    this.ServiceNoticiaService.getData().subscribe(data =>  {
      console.log(data);
    }
      )
  }


}
