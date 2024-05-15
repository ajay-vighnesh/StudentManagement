import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile/profile.component';
import { ProfileModule } from '../profile/profile.module';
import { MarkComponent } from '../mark/mark/mark.component';
import { MarkModule } from '../mark/mark.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';


const routes: Routes = [

{path:'',component:DashboardComponent,
  children:[
    {path:'profile', component:ProfileComponent},
    {path:'mark', component:MarkComponent}
  ]
},
// {path:'profile',component:ProfileComponent}

];



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProfileModule,
    MarkModule,
    NavbarModule,
    SidebarModule,
    // MarkModule
  ],
  exports: [
    RouterModule,
    // DashboardComponent
  ]
  
})
export class DashboardModule { 

  
  constructor(){
    console.log("i am dashboard");
    
  }
}
