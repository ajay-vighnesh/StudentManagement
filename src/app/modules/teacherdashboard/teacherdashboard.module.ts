import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeachernavbarModule } from '../teachernavbar/teachernavbar.module';
import { TeachersidebarModule } from '../teachersidebar/teachersidebar.module';


const routes: Routes = [
{path:'',component:TeacherdashboardComponent},

];



@NgModule({
  declarations: [
    TeacherdashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    TeachernavbarModule,
    TeachersidebarModule
  ],
  exports: [
    RouterModule,
  ]
})
export class TeacherdashboardModule { }
