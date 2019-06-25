import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
    // result$: {
    //   _id:String,
    //   pid:String,
    //   trainSearch:[{
    //     from:String,
    //     to:String,
    //     date:String
    //   }]
    // };
    result$: object;
    ser = [];
    constructor(private dataService: DataService) {}

    ngOnInit() {
        let sid = localStorage.getItem('sid');

        this.dataService.getSearches(sid).then((data) => {
            console.log(typeof data.trainSearch);
            this.result$ = data;
        });
    }
}
