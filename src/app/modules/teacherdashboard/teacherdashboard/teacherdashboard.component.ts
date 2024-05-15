import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.scss']
})
export class TeacherdashboardComponent implements OnInit {
  couchDbData:any;
  constructor(private router:Router,private activateRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((res)=>{
      console.log(res);
      if(Object.keys(res).length>0){
        this.couchDbData = JSON.parse(res['data'] )
        console.log(this.couchDbData,'name');
      }
        
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


  logout(){
    localStorage.removeItem('data')
    this.router.navigate(['/home'])
    console.log('logout');
    
  }
}
