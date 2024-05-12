import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewteacherdata',
  templateUrl: './viewteacherdata.component.html',
  styleUrls: ['./viewteacherdata.component.scss']
})


export class ViewteacherdataComponent implements OnInit {
  paramValue: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {

      this.paramValue = JSON.parse(param['id']);
    });
  }


}