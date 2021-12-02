import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarioEletronicoPageRoutingModule } from './diario-eletronico-routing.module';

import { DiarioEletronicoPage } from './diario-eletronico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarioEletronicoPageRoutingModule,
  ],
  declarations: [DiarioEletronicoPage],
})
export class DiarioEletronicoPageModule {}
