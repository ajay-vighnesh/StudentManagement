import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';


const routes: Routes = [
  // {path:'',component:ProfileComponent},
{path:'profile',component:ProfileComponent},

];



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule
    // DashboardModule
  ],
  exports: [
    RouterModule,
    ProfileComponent
  ],


})
export class ProfileModule {
  constructor(){
    console.log("i am profile")
  }
 }
