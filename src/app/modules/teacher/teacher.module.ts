import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from '../navbar/navbar.module';


const routes: Routes = [
{path:'',component:TeacherComponent},

];


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NavbarModule
  ],
  exports: [
    RouterModule,
    TeacherComponent
  ]
})
export class TeacherModule { 
  constructor(){
    console.log("yes")
  }
}
