import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'draw', loadChildren:()=>import('./pages/drawing-page/drawing-page.module').then(m=>m.DrawingPageModule)},
  {path:'start', loadChildren:()=>import('./pages/start-page/start-page.module').then(m=>m.StartPageModule)},
  {path:'', redirectTo:'/start', pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
