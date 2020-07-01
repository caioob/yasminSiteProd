import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { DesignComponent } from './design/design.component';
import { FotoComponent } from './foto/foto.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'design', component: DesignComponent },
  { path: 'foto', component: FotoComponent },
  { path: 'fotografia', component: FotografiaComponent },
   {path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
