import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentabilidadePage } from './rentabilidade.page';

const routes: Routes = [
  {
    path: '',
    component: RentabilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentabilidadePageRoutingModule {}
