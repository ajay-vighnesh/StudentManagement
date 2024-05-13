import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , Form } from '@angular/forms';
import { Router } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  handleKeyPress($event: KeyboardEvent) {
  }
  
  crudForm! : FormGroup;
  tableName1 : any[] = [];
  reviewername : any[] = [];
  developerName : any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  searchTerm:string = "";

  constructor(public cf:FormBuilder, public service:CouchService,private route:Router) {
    // this.service.getViewUrl()
    this.crudForm = this.cf.group({
      taskNo: ["",[Validators.pattern(/^[0-9_]+$/),Validators.required]],
      taskTitle: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      description: ["",[Validators.pattern(/^[a-z0-9@.]+$/),Validators.required]],
      reviewerName:"",
      deadLine:"",
      name: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      developerName:""
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
      _id: 'user_2_' + uuidv4(),
      data : {
        taskNo: this.crudForm.value.taskNo,
        taskTitle: this.crudForm.value.taskTitle,
        description: this.crudForm.value.description,
        reviewerName: this.crudForm.value.reviewerName,
        deadLine: this.crudForm.value.deadLine,
        name:this.crudForm.value.name,
        developerName:this.crudForm.value.developerName,
        type: 'task'
      }
    }
    console.log(data)
    this.service.create(data).subscribe((res:any)=>{
      console.log(res);
      this.read();
      this.clear()
    })
  }
  else{
    alert('Invalid')
  }
    }
    // Create the table //
  
    // Entering the page Fetch the data //
    ngOnInit(): void {
      this.read();
      this.getdata();
      this.getdeveloperdata();
      // this.getchangeid()
      
    }
    // Entering the page Fetch the data //
  
    read(){
      this.service.read("task_name","task").subscribe((res:any)=>{
        console.log(res);
        
        this.tableName1 = res.rows.map((item:any) => {
          console.log(item,'item');
          console.log(item.value.data.reviewerName,'itemvalue');
          
        this.service.getchange(item.value.data.reviewerName).subscribe((res:any)=>{
          console.log(res.data.name,'reviewer_name')
          item.value.data.reviewerName= res.data.name
         })
        this.service.getchange(item.value.data.developerName).subscribe((res:any)=>{
          console.log(res.data.name,'Deviewer_name')
          item.value.data.developerName= res.data.name
         })
          // console.log(item.value)
          return item.value
        })
        console.log(res.value,'res');
        
        console.log(this.tableName1);
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
            taskNo: this.crudForm.value.taskNo,
            taskTitle: this.crudForm.value.taskTitle,
            description: this.crudForm.value.description,
            isActive: true, 
            name:this.crudForm.value.name,
            deadLine:this.crudForm.value.deadLine,
            developerName:this.crudForm.value.developerName,
            reviewerName:this.crudForm.value.reviewerName,
            type:'task'    
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
      console.log(_id,_rev,'_id & _rev');
      
      this.service.delete(_id,_rev).subscribe((res:any)=>{
        console.log(res);
        this.read()
      })
    }

    // Alert //
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
    // Alert //
  
    search(){
      console.log(this.searchTerm)
      const searchTerms = {
        
        q :`taskTitle:_${this.searchTerm}* OR reviewerName:_${this.searchTerm}* OR developerName:_${this.searchTerm}`,
        include_docs: true
        
      }
  
      this.service.search(searchTerms,"task","taskSearch").subscribe((res:any)=>{
        console.log(res);
        this.tableName1 = res.rows.map((res:any) => res.doc)
        
        
      })
  
    }
  
    
    plus(){
      console.log('hau');
      
    }

   
    
    passParam(data:any){
      this.route.navigate(["view_task",JSON.stringify(data)],{skipLocationChange : true})
    }
  
  
    getdata(){
      this.service.getdata("user_name","user").subscribe((res:any)=>{
        console.log(res);
        this.reviewername = res.rows.map((res:any) => res.value)
        console.log(this.reviewername,'reviewername');
        // this.reviewername = res.rows
        // console.log(this.reviewername,'reviewername');
    })
  }
   
  getdeveloperdata(){
      this.service.getdata("user_name","user").subscribe((res:any)=>{
        console.log(res);
        this.developerName = res.rows.map((res:any) => res.value)
        console.log(this.developerName,'reviewername');
        // this.reviewername = res.rows
        // console.log(this.reviewername,'reviewername');
    })
  }

  // getchangeid(){
  //   this.service.getchange().subscribe((res:any)=>{
  //     console.log(res,'getchangeid');
      
  //   })
  // }
    
  }
  

