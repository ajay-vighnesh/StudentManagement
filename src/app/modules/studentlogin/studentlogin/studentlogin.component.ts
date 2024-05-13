import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent {
  crudForm! : FormGroup;
  tableName3 : any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  searchTerm:string = '';

  constructor(public cf:FormBuilder, public service:CouchService,private route:Router) {
    this.crudForm = this.cf.group({
      studentname: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      classname: ["",[Validators.pattern(/^[/d]+$/),Validators.required]],
      password: ["",[Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_]+$/),Validators.required]],
      // isActive: true,      
    })
  }


  // Create the table //
  create(){
    if(this.crudForm.valid){
      const data = {
        _id: 'studentsignup_2_' + uuidv4(),
        data : {
          studentname:this.crudForm.value.studentname,
          classname: this.crudForm.value.classname,
          password: this.crudForm.value.password,
          type:'student-signup'    
        }
      }
      this.service.create(data).subscribe((res:any)=>{
        console.log(res);
        this.route.navigate(['/dashboard'])

   
      })
    }
    else{
      alert('Pls fill the table')
    }
    this.getsignup()
    console.log('student-dashboard');
    
      }
      // Create the table //
    

      getsignup(){
        this.service.getsignup("signup-view","edit").subscribe((res:any)=>{
          console.log(res);
        
          
      })
    }

}
