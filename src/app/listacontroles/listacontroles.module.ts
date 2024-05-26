import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacontrolesPageRoutingModule } from './listacontroles-routing.module';

import { ListacontrolesPage } from './listacontroles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacontrolesPageRoutingModule
  ],
  declarations: [ListacontrolesPage]
})
export class ListacontrolesPageModule {}
