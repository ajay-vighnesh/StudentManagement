import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 constructor(private router:Router){

 }

 profile(){
  console.log('profile');
  // this.flag=true
  this.router.navigate(['dashboard/profile'])

  
}

mark(){
  console.log('mark');
  this.router.navigate(['dashboard/mark'])
  
}
}
