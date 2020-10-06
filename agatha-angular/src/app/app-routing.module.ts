import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcedimentosComponent } from './procedimentos/procedimentos.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'procedimentos', component: ProcedimentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
