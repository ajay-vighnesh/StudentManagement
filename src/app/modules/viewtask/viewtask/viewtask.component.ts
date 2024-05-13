import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent {

  paramValue: any;
  data: any;


  constructor(private route: ActivatedRoute, private routes:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {

      this.paramValue = JSON.parse(param['id']);
      console.log('paramValue',this.paramValue);
      
    });
  }

  addSubTask(data:any){
    console.log(data)
      this.routes.navigate(["subtask",JSON.stringify(data)],{skipLocationChange : true})
  }


}
