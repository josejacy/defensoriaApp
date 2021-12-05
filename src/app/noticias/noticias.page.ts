import { Noticias } from './../service/service-noticia.service';
import { Component, OnInit } from '@angular/core';
import { ServiceNoticiaService } from './../service/service-noticia.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticia: Noticias[];
  constructor(private ServiceNoticiaService: ServiceNoticiaService, public loadingController: LoadingController) { }

 async ngOnInit() {
    this.presentLoading();
   await this.ServiceNoticiaService.getAll().subscribe(data => {
      this.noticia = data;
    })
  }

  getData(){
    this.ServiceNoticiaService.getData().subscribe(data =>  {
      console.log(data);
    }
      )
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'qualquer',
      message: 'carregando..',
      duration: 700
    });
    await loading.present();
  }


}
