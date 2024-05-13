import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {path:'',component:ViewtaskComponent},
  ];


@NgModule({
  declarations: [
    ViewtaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ViewtaskModule { }
