import { ServiceDocService } from '../service-doc.service';
import { Component, OnInit } from '@angular/core';
import { Documentos } from './../service/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-documentos-uteis',
  templateUrl: './documentos-uteis.page.html',
  styleUrls: ['./documentos-uteis.page.scss'],
})
export class DocumentosUteisPage implements OnInit {
  documento: Documentos[];
  constructor(
    private ServiceDocService: ServiceDocService,
    public loadingController: LoadingController
  ) {
    this.getData();
  }

  async ngOnInit() {
    this.presentLoading();
    await this.ServiceDocService.getAll().subscribe((data) => {
      this.documento = data;
    });
  }

  getData() {
    this.ServiceDocService.getData().subscribe((data) => {
      console.log(data);
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'qualquer',
      message: 'carregando..',
      duration: 500,
    });
    await loading.present();
  }
}
