import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
@Injectable()
export class DataService {
	constructor(private http: HttpClient) {}

	getpnrStatus(pnrnum) {
		console.log(`https://api.railwayapi.com/v2/pnr-status/pnr/${pnrnum}/apikey/qre3ih3v5w/`);

		return this.http.get(`https://api.railwayapi.com/v2/pnr-status/pnr/${pnrnum}/apikey/qre3ih3v5w/`);
	}
	getTrains(input, token): Observable<any> {
		// let reqobj = {
		// 	body: JSON.stringify(input),
		// 	method: 'POST',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 		Authorization: 'Bearer ' + token
		// 	}
		// };
		const httpOptions = {
			headers: new HttpHeaders({
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			})
		};
		// return fetch('http://localhost:3002/trains', reqobj).then(function(data) {
		// 	return data.json();
		// });
		return this.http.post<any>('http://localhost:3002/trains', JSON.stringify(input), httpOptions);
	}
	setAccount(input) {
		let reqobj = {
			body: JSON.stringify(input),
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		};
		return fetch('http://localhost:3002/account', reqobj).then(function(data) {
			return data.json();
		});
	}
	getacess(input) {
		let reqobj = {
			body: JSON.stringify(input),
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		};
		return fetch('http://localhost:3002/login', reqobj).then(function(data) {
			return data.json();
		});
	}
	getSearches(token) {
		console.log(token);
		let headers = {};
		if (token) {
			console.log(token);
			headers['Authorization'] = 'Bearer ' + token;
		}

		return fetch('http://localhost:3002/Searches', { headers: headers }).then(function(data) {
			return data.json();
		});
	}
}
