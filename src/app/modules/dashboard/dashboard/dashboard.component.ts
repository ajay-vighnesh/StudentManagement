import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
flag:boolean=false
name:any
couchDbData:any

constructor(private router:Router,private activateRoute:ActivatedRoute){

}

ngOnInit():void {
this.activateRoute.queryParams.subscribe((res:any)=>{
  console.log(res,'res')
  if(Object.keys(res).length>0){
this.couchDbData = JSON.parse(res['data'] )
console.log(this.couchDbData,'name');}

if(this.couchDbData){
 localStorage.setItem("name",JSON.stringify(this.couchDbData))

}

else{
  const local=localStorage.getItem('name')
  console.log(local,'local');
  
  if(local!==null){
  this.couchDbData=JSON.parse(local)
}

}

})
}

navigation(event:any){
console.log(event);

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
