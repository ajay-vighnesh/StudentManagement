import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent implements OnInit {
  
  crudForm! : FormGroup;
  tableName2 : any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  routeValue:any = ""

  constructor(public cf:FormBuilder, public service:CouchService,private route:Router,private snap:ActivatedRoute){
    this.crudForm = this.cf.group({
      subtaskNo: ["",[Validators.pattern(/^[0-9_]+$/),Validators.required]],
      subtaskTitle: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      description: ["",[Validators.pattern(/^[a-z0-9@.]+$/),Validators.required]],
      startDate:"",
      endDate:"",
      status:"",
      
      // isActive: true,   
  })

  }
  ngOnInit(): void {
    
    this.getsubtaskdata();
    
    this.routeValue = JSON.parse(this.snap.snapshot.params["id"])
    console.log(this.routeValue);
    this.gettask();
    // this.read();
    


    // this.getchangeid()
    
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
      subtaskNo: this.crudForm.value.subtaskNo,
      subtaskTitle: this.crudForm.value.subtaskTitle,
      description: this.crudForm.value.description,
      startDate: this.crudForm.value.startDate,
      endDate: this.crudForm.value.endDate,
      status:this.crudForm.value.status,
      taskId:this.routeValue._id,
      type: 'subtask'
    }
  }
  console.log('going to print');

  
  console.log(data,'data of create')
  this.service.create(data).subscribe((res:any)=>{
    console.log(res);
    // this.read();
  this.gettask();

    this.clear()
  })
}
else{
  alert('Invalid')
}
  }
  // Create the table //


   // Entering the page Fetch the data //
  
  // Entering the page Fetch the data //


  // read the data //

  // read(){
  //   this.service.gettask("subtask_name",this.routeValue._id).subscribe((res:any)=>{
  //     this.tableName2 = res.rows.map((res:any) => res.value)
  //     console.log(this.tableName2);

      
      
  //   })
  // }

  // read the data //

  updateAction(data:any){
    
    this.crudForm.patchValue(data.data);
    this.isEdit = true;
    this.update_id = data._id;
    this.update_rev = data._rev;
  }

  update(){
    if(this.crudForm.valid){
      console.log('hai');
      
      const data = {
        _id: this.update_id,
        _rev: this.update_rev,
        data : {
          subtaskNo:this.crudForm.value.subtaskNo,
          subtaskTitle: this.crudForm.value.subtaskTitle,
          description:this.crudForm.value.description,
          startDate: this.crudForm.value.startDate, 
          endDate: this.crudForm.value.endDate, 
          status: this.crudForm.value.status, 
          taskId:this.routeValue._id,
          type:'subtask'    
        }
      }
      console.log('update done');  

      this.service.update(this.update_id,this.update_rev,data).subscribe((res)=>{
        console.log(res);
      this.gettask()

        // this.read();
        this.isEdit = false;
        this.clear()
      })
    }
    else{
      alert('Invalid')
    }
  }


   
  delete(_id:string,_rev:string){
    console.log('delete');
    console.log(_id,_rev,'_id & _rev');
    
    this.service.delete(_id,_rev).subscribe((res:any)=>{
      
      console.log(res);
      // this.read()
      console.log('delete');
      this.gettask()
    })
  }

  // Get the data from backend  //

  getsubtaskdata(){
    this.service.getsuntaskdata("subtask_name","subtask").subscribe((res:any)=>{
      console.log(res);
      // this.reviewername = res.rows.map((res:any) => res.value)
      // console.log(this.reviewername,'reviewername');
      // this.reviewername = res.rows
      // console.log(this.reviewername,'reviewername');
  })
}
  // Get the data from backend  //

  passParam(data:any){
    // this.route.navigate(["view_task",JSON.stringify(data.data)],{skipLocationChange : true})
  }


  gettask(){
    console.log(this.routeValue,'this_route');
    
    this.service.gettask("subtaskdata_view",this.routeValue._id).subscribe((res:any)=>{
      console.log(res.rows)
     this.tableName2=res.rows
   
    })
  }
}
