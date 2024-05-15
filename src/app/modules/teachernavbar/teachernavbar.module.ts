import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachernavbarComponent } from './teachernavbar/teachernavbar.component';



@NgModule({
  declarations: [
    TeachernavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeachernavbarComponent
  ]
})
export class TeachernavbarModule { }
