import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewteacherdataComponent } from './viewteacherdata/viewteacherdata.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',component:ViewteacherdataComponent},
  ];
  



@NgModule({
  declarations: [
    ViewteacherdataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ViewteacherdataModule { }
