import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DummyService {
	constructor() {}
	getListOfThreeTrains(): Observable<any> {
		let list = [
			{
				days: [
					{ runs: 'Y', code: 'MON' },
					{ runs: 'Y', code: 'TUE' },
					{ runs: 'Y', code: 'WED' },
					{ runs: 'Y', code: 'THU' },
					{ runs: 'Y', code: 'FRI' },
					{ runs: 'Y', code: 'SAT' },
					{ runs: 'Y', code: 'SUN' }
				],
				travel_time: '50:30',
				dest_arrival_time: '13:45',
				from_station: { name: 'THIRUVANANTHAPURAM CENTRAL', lat: 8.4869485, lng: 76.9525968, code: 'TVC' },
				src_departure_time: '11:15',
				classes: [
					{ name: 'AC CHAIR CAR', code: 'CC' },
					{ name: 'SECOND AC', code: '2A' },
					{ name: 'THIRD AC', code: '3A' },
					{ name: '3rd AC ECONOMY', code: '3E' },
					{ name: 'SECOND SEATING', code: '2S' },
					{ name: 'SLEEPER CLASS', code: 'SL' },
					{ name: 'FIRST AC', code: '1A' },
					{ name: 'FIRST CLASS', code: 'FC' }
				],
				name: 'KERALA EXPRESS',
				number: '12625',
				to_station: { name: 'NEW DELHI', lat: 28.6141793, lng: 77.2022662, code: 'NDLS' }
			},
			{
				days: [
					{ runs: 'N', code: 'MON' },
					{ runs: 'Y', code: 'TUE' },
					{ runs: 'N', code: 'WED' },
					{ runs: 'N', code: 'THU' },
					{ runs: 'N', code: 'FRI' },
					{ runs: 'N', code: 'SAT' },
					{ runs: 'N', code: 'SUN' }
				],
				travel_time: '50:55',
				dest_arrival_time: '17:10',
				from_station: { name: 'THIRUVANANTHAPURAM CENTRAL', lat: 8.4869485, lng: 76.9525968, code: 'TVC' },
				src_departure_time: '14:15',
				classes: [
					{ name: 'AC CHAIR CAR', code: 'CC' },
					{ name: 'SECOND AC', code: '2A' },
					{ name: 'THIRD AC', code: '3A' },
					{ name: '3rd AC ECONOMY', code: '3E' },
					{ name: 'SECOND SEATING', code: '2S' },
					{ name: 'SLEEPER CLASS', code: 'SL' },
					{ name: 'FIRST AC', code: '1A' },
					{ name: 'FIRST CLASS', code: 'FC' }
				],
				name: 'NIZAMUDDIN EXP',
				number: '12643',
				to_station: { name: 'HAZRAT NIZAMUDDIN', lat: 28.58886, lng: 77.253766, code: 'NZM' }
			},
			{
				days: [
					{ runs: 'N', code: 'MON' },
					{ runs: 'Y', code: 'TUE' },
					{ runs: 'N', code: 'WED' },
					{ runs: 'Y', code: 'THU' },
					{ runs: 'Y', code: 'FRI' },
					{ runs: 'N', code: 'SAT' },
					{ runs: 'N', code: 'SUN' }
				],
				travel_time: '45:40',
				dest_arrival_time: '16:55',
				from_station: { name: 'THIRUVANANTHAPURAM CENTRAL', lat: 8.4869485, lng: 76.9525968, code: 'TVC' },
				src_departure_time: '19:15',
				classes: [
					{ name: 'AC CHAIR CAR', code: 'CC' },
					{ name: 'SECOND AC', code: '2A' },
					{ name: 'THIRD AC', code: '3A' },
					{ name: '3rd AC ECONOMY', code: '3E' },
					{ name: 'SECOND SEATING', code: '2S' },
					{ name: 'SLEEPER CLASS', code: 'SL' },
					{ name: 'FIRST AC', code: '1A' },
					{ name: 'FIRST CLASS', code: 'FC' }
				],
				name: 'TVC-NZM RAJDHANI EXP',
				number: '12431',
				to_station: { name: 'HAZRAT NIZAMUDDIN', lat: 28.58886, lng: 77.253766, code: 'NZM' }
			}
		];
		return of(list);
	}

	isAuthenticated(): boolean {
		// console.log(!!localStorage.getItem('sid') + 'test');

		return !!localStorage.getItem('sid');
	}
}
