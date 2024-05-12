import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtaskComponent } from './subtask/subtask.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
{path:'',component:SubtaskComponent},
];



@NgModule({
  declarations: [
    SubtaskComponent
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
export class SubtaskModule { }
