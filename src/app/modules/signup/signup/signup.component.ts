import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  crudForm! : FormGroup;
  tableName3 : any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  searchTerm:string = '';

  constructor(public cf:FormBuilder, public service:CouchService,private route:Router) {
    this.crudForm = this.cf.group({
      studentname: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      password: ["",[Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_]+$/),Validators.required]],
      // isActive: true,      
    })
  }


  // Create the table //
  create(){
    if(this.crudForm.valid){
      const data = {
        _id: 'studentlogin_2_' + uuidv4(),
        data : {
          studentname:this.crudForm.value.studentname,
          classname: this.crudForm.value.classname,
          password: this.crudForm.value.password,
          type:'student-login'    
        }
      }
      this.service.create(data).subscribe((res:any)=>{
        console.log(res);
   
      })
    }
    else{
      alert('Pls fill the table')
    }
      }
      // Create the table //
    
login(){
  this.service.getsignup("signup-view", this.crudForm.value.studentname ).subscribe((res:any)=>{
    console.log(res)
   if(res.rows.length>0){
    if(res.rows[0].value.data.password===this.crudForm.value.password){
      this.route.navigate(['/dashboard'])
    }
    else{
      alert("password is wrong")
    }

   }
   else{
    alert("user not found")
    // this.route.navigate(['/home'])
   }
    
})
}

}
