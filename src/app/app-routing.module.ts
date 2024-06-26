import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { MarkComponent } from './modules/mark/mark/mark.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path:'home',loadChildren:()=>import('./modules/home/home.module').then(module => module.HomeModule) },
  { path:'dashboard',loadChildren:()=>import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule)},
  // { path:'dashboard',component:DashboardComponent,
  //   children: [
  //     { path:'profile',component:ProfileComponent },
  // { path:'mark', component:MarkComponent },

  //   ]
  //  },
  // { path:'profile',loadChildren:()=>import('./modules/profile/profile.module').then(module => module.ProfileModule) },
  // { path:'mark',loadChildren:()=>import('./modules/mark/mark.module').then(module => module.MarkModule) },
  { path:'studentlogin',loadChildren:()=>import('./modules/studentlogin/studentlogin.module').then(module => module.StudentloginModule) },
  { path:'teacherlogin',loadChildren:()=>import('./modules/teacherlogin/teacherlogin.module').then(module => module.TeacherloginModule) },
  { path:'teacherdashboard',loadChildren:()=>import('./modules/teacherdashboard/teacherdashboard.module').then(module => module.TeacherdashboardModule) },
  { path:'signup',loadChildren:()=>import('./modules/signup/signup.module').then(module => module.SignupModule) },
  {  path:'student',loadChildren:()=>import('./modules/user/user.module').then(module => module.UserModule) },
  {  path:'teacher',loadChildren:()=>import('./modules/teacher/teacher.module').then(module => module.TeacherModule) },
  {  path:'view_user/:id',loadChildren:()=>import('./modules/viewdata/viewdata.module').then(module => module.ViewdataModule) },
  {  path:'view_task/:id',loadChildren:()=>import('./modules/viewtask/viewtask.module').then(module => module.ViewtaskModule) },
  {  path:'view_teacher/:id',loadChildren:()=>import('./modules/viewteacherdata/viewteacherdata.module').then(module => module.ViewteacherdataModule) },
  // {  path:'subtask/:id',loadChildren:()=>import('./modules/subtask/subtask.module').then(module => module.SubtaskModule) },
  { path:'', redirectTo:'home',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(){
    console.log("i am main routing")
  }
}
