import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaMainComponent } from './components/vista-main/vista-main.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';

const routes: Routes = [
  {path:'vistaMain',component:VistaMainComponent},
  {path:'vista2',component:Vista2Component},
  {path:'vista3/:id',component:Vista3Component},
  {path: '**', component:VistaMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
