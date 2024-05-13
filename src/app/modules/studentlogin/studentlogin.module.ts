import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
{path:'',component:StudentloginComponent},

];


@NgModule({
  declarations: [
    StudentloginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class StudentloginModule { }
