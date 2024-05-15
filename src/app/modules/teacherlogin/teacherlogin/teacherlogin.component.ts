import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.scss']
})
export class TeacherloginComponent {
  crudForm! : FormGroup;
  table:any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  searchTerm:string = '';

  constructor(public cf:FormBuilder, public service:CouchService,private route:Router) {
    this.crudForm = this.cf.group({
      teachername: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      teacherid: ["",[Validators.pattern(/^[0-9]+$/),Validators.required]],
      password: ["",[Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_]+$/),Validators.required]],
      // isActive: true,      
    })
  }

   // Create the table //
   create(){
    if(this.crudForm.valid){
      const data = {
        _id: 'teachersignup_2_' + uuidv4(),
        data : {
          teachername:this.crudForm.value.teachername,
          teacherid: this.crudForm.value.teacherid,
          password: this.crudForm.value.password,
          type:'teacher-signup'    
        }
      }
      this.service.create(data).subscribe((res:any)=>{
        console.log(res);
        this.route.navigate(['/teacherdashboard'])

   
      })
    }
    else{
      alert('Pls fill the table')
    }
    // this.getsignup()
    // console.log('student-dashboard');
    
      }
      // Create the table //
    

    //   getsignup(){
    //     this.service.getsignup("signup-view","edit").subscribe((res:any)=>{
    //       console.log(res);
        
          
    //   })
    // }

}





