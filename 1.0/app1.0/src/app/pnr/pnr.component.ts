import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {
  listFilter: string = '';
  getstatus():void{
    this.router.navigate([`pnr/pnrresults/${this.listFilter}`]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
