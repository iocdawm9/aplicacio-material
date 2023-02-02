import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{ path: '', redirectTo: 'acces', pathMatch: 'full' },
{ path: 'acces', component:LoginComponent },
{path: 'tauler', loadChildren: () => import('./components/tauler/tauler.module').then(x=>x.TaulerModule) },
{ path: '**', redirectTo: 'acces', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
