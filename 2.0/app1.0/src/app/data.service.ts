import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}

    getpnrStatus(pnrnum) {
        return this.http.get(`https://api.railwayapi.com/v2/pnr-status/pnr/${pnrnum}/apikey/hpibx22qsc/`);
    }
    getTrains(input, sid) {
        console.log(sid);

        const reqobj = {
            body: JSON.stringify(input),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sid
            }
        };
        return fetch('http://localhost:3002/trains', reqobj).then(function(data) {
            return data.json();
        });
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
