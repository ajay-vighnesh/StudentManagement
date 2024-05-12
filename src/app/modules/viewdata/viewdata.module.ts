import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',component:ViewdataComponent},
  ];
  

@NgModule({
  declarations: [
    ViewdataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    RouterModule,
  ]
})
export class ViewdataModule { }
