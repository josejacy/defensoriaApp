import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentosUteisPageRoutingModule } from './documentos-uteis-routing.module';

import { DocumentosUteisPage } from './documentos-uteis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentosUteisPageRoutingModule
  ],
  declarations: [DocumentosUteisPage]
})
export class DocumentosUteisPageModule {}
