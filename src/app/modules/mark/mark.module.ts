import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkComponent } from './mark/mark.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';


const routes: Routes = [
// {path:'',component:MarkComponent},
{path:'mark',component:MarkComponent},

];



@NgModule({
  declarations: [
    MarkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule

  ],
  exports: [
    RouterModule,
    MarkComponent,
  ]
})
export class MarkModule {

  constructor(){
    console.log('i am mark');
    
  }

 }
