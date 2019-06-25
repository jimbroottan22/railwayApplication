import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-tbtws-result',
  templateUrl: './tbtws-result.component.html',
  styleUrls: ['./tbtws-result.component.css']
})
export class TbtwsResultComponent implements OnInit {
  result$: object;
  input:{
  from:String,
  to:String,
  date:Date
  }
  constructor(private route: ActivatedRoute, private dataService: DataService) { 
     this.route.params.subscribe( params => {
      this.input={
        'from':params.from,
        "to":params.to,
        "date":params.date
      } 
       }
      );
  }
  
  

  ngOnInit() {
    let sid=localStorage.getItem('sid');
    console.log(this.input)
    this.dataService.getTrains(this.input,sid).then(
    data => {this.result$ = data
      console.log(this.result$)
    }
  );
  }

}
