import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  { path: 'house/:name', component: HouseComponent },
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
