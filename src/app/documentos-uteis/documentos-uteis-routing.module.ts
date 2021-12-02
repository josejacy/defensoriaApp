import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentosUteisPage } from './documentos-uteis.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentosUteisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentosUteisPageRoutingModule {}
