import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouchService } from 'src/app/services/couch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
name:any;
class:any;
data:any;
  tableName:any[] = [];
  

  constructor(private service:CouchService, private activateRoute:ActivatedRoute){

  }

  ngOnInit(): void {

    // this.activateRoute.queryParams.subscribe((res)=>{
    //   console.log(res,'res');
      
    // })

   
    const loc=localStorage.getItem("name")
    if(loc){
      this.data = (JSON.parse(loc)).data
      console.log(this.data,'this.data');
      
    }
    else{
      alert('no local')
    }
    





























    // if(loc){
    //     localStorage.setItem("name",JSON.stringify(loc))
    // }

    // else{
    // const local=localStorage.getItem('name')
    // console.log(local,'local');
  
    // if(local!==null){
    // this.name=JSON.parse(local)
    // }
    // }

    // const loc1 = localStorage.getItem("class")
    // if(this.class){
    //   localStorage.setItem("class",JSON.stringify(this.class))
    // }
    // else{
    //   const local1 = localStorage.getItem('class')
    //   console.log(local1,'local1');   

    //   if(local1!==null){
    //     this.class = JSON.parse(local1)
    //   }
    // }

this.readprofile()

}
  

  readprofile(){
    this.service.readprofile("signup-view",this.name).subscribe((res)=>{
      console.log(res,'readprofile');
      })

  }
}
