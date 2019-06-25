import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pnr-result',
  templateUrl: './pnr-result.component.html',
  styleUrls: ['./pnr-result.component.css']
})
export class PnrResultComponent implements OnInit {

  pnrnum$: Object;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.pnrnum$ = params.pnrnum );
  }

  ngOnInit() {
    this.data.getpnrStatus(this.pnrnum$).subscribe(
      data => {this.pnrnum$ = data
      }
    );
  }

}
