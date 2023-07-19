import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingPageComponent } from './drawing-page.component';

const routes: Routes = [
  {path:'', component:DrawingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawingPageRoutingModule { }
