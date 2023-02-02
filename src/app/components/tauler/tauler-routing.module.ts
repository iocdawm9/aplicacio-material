import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaulerComponent } from './tauler.component';


const routes: Routes = [
  {path: '', component:TaulerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaulerRoutingModule { }
