import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
data1:any;
name:string = "";

  constructor(private router:Router){}
  
  ngOnInit(): void {
  
    const loc = localStorage.getItem("name")
    if (loc){
      this.data1 = (JSON.parse(loc)).data
      console.log(this.data1,'this.data1');
      this.name = this.data1.studentname;
      this.name= this.name.charAt(0)
      console.log(this.name);
      

      
    }
    else{
      alert('no local')
    }
  }

  signout(){  
  localStorage.removeItem('name')
this.router.navigate(['/home'])
console.log('removed');


  }


home(){
this.router.navigate(['/home'])
console.log('home');
}

student(){
  this.router.navigate(['/student'])
  console.log('student');
}

teacher(){
this.router.navigate(['/teacher'])
console.log('teacher');

}

dashboard(){
this.router.navigate(['/dashboard'])
console.log('dashboard');
}
}
