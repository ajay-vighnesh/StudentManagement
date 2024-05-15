import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachernavbar',
  templateUrl: './teachernavbar.component.html',
  styleUrls: ['./teachernavbar.component.scss']
})
export class TeachernavbarComponent implements OnInit {
  data1:any;
  name:string = "";

  constructor(private router:Router){

  }

  ngOnInit(): void {
    const loc = localStorage.getItem("name")
    if (loc){
      this.data1 = (JSON.parse(loc)).data
      console.log(this.data1,'this.data1');
      this.name = this.data1.teachername;
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
}

  