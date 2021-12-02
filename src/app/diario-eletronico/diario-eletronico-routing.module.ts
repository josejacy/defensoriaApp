import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarioEletronicoPage } from './diario-eletronico.page';

const routes: Routes = [
  {
    path: '',
    component: DiarioEletronicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarioEletronicoPageRoutingModule {}
