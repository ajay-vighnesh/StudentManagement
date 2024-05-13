import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
{path:'',component:SignupComponent},

];


@NgModule({
  declarations: [
    SignupComponent
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
export class SignupModule { }
