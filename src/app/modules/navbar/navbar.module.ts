import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { TeacherModule } from '../teacher/teacher.module';




@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // HomeModule,
    // TeacherModule
  ],
  exports: [
    NavbarComponent,
    ],
})
export class NavbarModule {
  constructor(){
    console.log('i am navbar modules')
  }
 }
