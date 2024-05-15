import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersidebarComponent } from './teachersidebar/teachersidebar.component';


@NgModule({
  declarations: [
    TeachersidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TeachersidebarComponent
  ]
})
export class TeachersidebarModule { }
