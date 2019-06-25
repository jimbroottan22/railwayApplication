import { Component, OnInit } from '@angular/core';

import { DummyService } from '../dummy.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	result$: object;

	constructor(private auth: DummyService) {}
	needsLogin() {
		console.log(!this.auth.isAuthenticated() + 'test');

		return !this.auth.isAuthenticated();
	}
	ngOnInit() {}
}
