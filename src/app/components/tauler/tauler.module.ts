import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaulerRoutingModule } from './tauler-routing.module';
import { TaulerComponent } from './tauler.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    TaulerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TaulerRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TaulerModule { }
