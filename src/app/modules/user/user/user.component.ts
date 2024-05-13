import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , Form } from '@angular/forms';
import { Router } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  handleKeyPress($event: KeyboardEvent) {
  }
  crudForm! : FormGroup;
  tableName : any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  searchTerm:string = '';
  //displayData:any[] = [];

  constructor(public cf:FormBuilder, public service:CouchService,private route:Router) {
    this.crudForm = this.cf.group({
      rollno: ["",[Validators.pattern(/^[0-9]+$/),Validators.required]],
      studentname: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      classname: ["",[Validators.pattern(/^[0-9]+$/),Validators.required]],
      // isActive: true,      
    })
  }

    // Clear the data inside the input box //
    clear(){
      this.crudForm.reset()
    }
    // Clear the data inside the input box //
    
    // Cancel the data //
    cancel(){
      this.clear()
      this.isEdit = false;
    }
    // Cancel the data //
  
    // Create the table //
    create(){
  if(this.crudForm.valid){
    const data = {
      _id: 'student_2_' + uuidv4(),
      data : {
        rollno:this.crudForm.value.rollno,
        studentname: this.crudForm.value.studentname,
        classname: this.crudForm.value.classname,
        // mail:this.crudForm.value.mail,
        // isActive: this.crudForm.value.isActive,
        type:'student'    
      }
    }
    this.service.create(data).subscribe((res:any)=>{
      console.log(res);
      this.read();
      this.clear()
    })
  }
  else{
    alert('Pls fill the table')
  }
    }
    // Create the table //
  
    // Entering the page Fetch the data //
    ngOnInit(): void {
      this.read()
    }
    // Entering the page Fetch the data //  
    
  
    read(){
      this.service.read("user_name","student").subscribe((res:any)=>{
        this.tableName = res.rows.map((res:any) => res.value)
        console.log(this.tableName);
        
      })
    }
  
    updateAction(data:any){
      this.crudForm.patchValue(data.data);
      this.isEdit = true;
      this.update_id = data._id;
      this.update_rev = data._rev;
    }
  
    update(){
      if(this.crudForm.valid){
        const data = {
          _id: this.update_id,
          _rev: this.update_rev,
          data : {
            rollno:this.crudForm.value.rollno,
        studentname: this.crudForm.value.studentname,
        classname: this.crudForm.value.classname,
            type:'student'    
          }
        }
        this.service.update(this.update_id,this.update_rev,data).subscribe((res)=>{
          console.log(res);
          this.read();
          this.isEdit = false;
          this.clear()
        })
      }
      else{
        alert('Invalid')
      }
    }
  
  
  
    delete(_id:string,_rev:string){
      this.service.delete(_id,_rev).subscribe((res:any)=>{
        console.log(res);
        this.read()
      })
    }

    deletealert(_id:string,_rev:string){
      if(confirm('Do you want to delete?')){
           console.log('yes');
           this.service.delete(_id,_rev).subscribe((res:any)=>{
            console.log(res);
            this.read()
          })
           
      }
      else{
        console.log('no');
        
      }
      this.clear()
    }
    
  
     search(){
      console.log(this.searchTerm)
      const searchTerms = {
        
        q :`studentname:_${this.searchTerm}* OR classname:_${this.searchTerm}* OR rollno:_${this.searchTerm}* `,
        include_docs: true
        
      }
      // AND mail:_*${this.searchTerm}*
      this.service.search(searchTerms,"search","student_search").subscribe((res:any)=>{
        console.log(res.rows);
        this.tableName = res.rows.map((res:any) => res.doc)
      })
  
    }
  
    
    plus(){
      console.log('hau');
      
    }
    
    passParam(data:any){
      this.route.navigate(["view_user",JSON.stringify(data.data)],{skipLocationChange : true})
    }
  
  
  }
  
