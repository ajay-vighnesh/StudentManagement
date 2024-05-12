import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home',loadChildren:()=>import('./modules/home/home.module').then(module => module.HomeModule) },
  {  path:'user',loadChildren:()=>import('./modules/user/user.module').then(module => module.UserModule) },
  {  path:'teacher',loadChildren:()=>import('./modules/teacher/teacher.module').then(module => module.TeacherModule) },
  {  path:'task',loadChildren:()=>import('./modules/task/task.module').then(module => module.TaskModule) },
  {  path:'view_user/:id',loadChildren:()=>import('./modules/viewdata/viewdata.module').then(module => module.ViewdataModule) },
  {  path:'view_task/:id',loadChildren:()=>import('./modules/viewtask/viewtask.module').then(module => module.ViewtaskModule) },
  {  path:'view_teacher/:id',loadChildren:()=>import('./modules/viewteacherdata/viewteacherdata.module').then(module => module.ViewteacherdataModule) },
  {  path:'subtask/:id',loadChildren:()=>import('./modules/subtask/subtask.module').then(module => module.SubtaskModule) },
  { path:'', redirectTo:'home',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }