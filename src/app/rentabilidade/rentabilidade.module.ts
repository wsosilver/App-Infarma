import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentabilidadePageRoutingModule } from './rentabilidade-routing.module';

import { RentabilidadePage } from './rentabilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentabilidadePageRoutingModule
  ],
  declarations: [RentabilidadePage]
})
export class RentabilidadePageModule {}
