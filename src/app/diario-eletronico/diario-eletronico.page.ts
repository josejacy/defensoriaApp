import { DiarioEletronicoService } from './diario-eletronico.service';
import { Component, OnInit } from '@angular/core';
import { Diarios } from './diario-eletronico.service';

@Component({
  selector: 'app-diario-eletronico',
  templateUrl: './diario-eletronico.page.html',
  styleUrls: ['./diario-eletronico.page.scss'],
})
export class DiarioEletronicoPage implements OnInit {
  diario: Diarios[];
  constructor(private DiarioEletronicoService: DiarioEletronicoService) {
    this.getData();
  }

  ngOnInit() {
    this.DiarioEletronicoService.getAll().subscribe((data) => {
      this.diario = data;
    });
  }
  getData() {
    this.DiarioEletronicoService.getData().subscribe((data) => {});
  }
}
