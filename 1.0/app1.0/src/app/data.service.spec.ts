/* tslint:disable:no-unused-variable */
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { DataService } from './data.service';
import { Input } from '@angular/core';

describe('Service: DataService', () => {
	let service: DataService;
	let backend: MockBackend;
	let results: any;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientModule ],
			providers: [
				DataService,
				MockBackend,
				BaseRequestOptions,

				{
					provide: HttpClient,
					useFactory: (backend, options) => new Http(backend, options),
					deps: [ MockBackend, BaseRequestOptions ]
				}
			]
		});
		let input = {
			from: 'clt',
			to: 'jat',
			date: '26-09-2018'
		};

		backend = TestBed.get(MockBackend);

		service = TestBed.get(DataService);
	});

	it(
		'get trains should return train btw stations',
		fakeAsync(() => {
			let response = {
				debit: 1,
				total: 1,
				trains: [
					{
						travel_time: '64:30',
						src_departure_time: '20:30',
						name: 'MAQ-SVDK NAVYUG EXP',
						to_station: { lng: 74.8799925, name: 'JAMMU TAWI', code: 'JAT', lat: 32.7060401 },
						number: '16687',
						days: [
							{ code: 'MON', runs: 'Y' },
							{ code: 'TUE', runs: 'N' },
							{ code: 'WED', runs: 'N' },
							{ code: 'THU', runs: 'N' },
							{ code: 'FRI', runs: 'N' },
							{ code: 'SAT', runs: 'N' },
							{ code: 'SUN', runs: 'N' }
						],
						classes: [
							{ code: '3E', name: '3rd AC ECONOMY' },
							{ code: '2S', name: 'SECOND SEATING' },
							{ code: '1A', name: 'FIRST AC' },
							{ code: 'SL', name: 'SLEEPER CLASS' },
							{ code: '2A', name: 'SECOND AC' },
							{ code: 'FC', name: 'FIRST CLASS' },
							{ code: 'CC', name: 'AC CHAIR CAR' },
							{ code: '3A', name: 'THIRD AC' }
						],
						from_station: { lng: 75.9540682056532, name: 'KOZHIKKODE', code: 'CLT', lat: 11.1363283 },
						dest_arrival_time: '13:00'
					}
				],
				response_code: 200
			};

			backend.connections.subscribe((connection) => {
				connection.mockRespond(
					new Response(<ResponseOptions>{
						body: JSON.stringify(response)
					})
				);
			});

			service
				.getTrains(
					Input,
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1M…U4In0.1yehSpDETyy2PQdCJ0WmQawJ3hvtO6-dyVsYmLBlFw4'
				)
				.subscribe((data) => {
					results = JSON.parse(data._body);
				});
			tick();

			expect(results.trains.length).toBe(1);
			expect(results.trains[0].name).toBe('MAQ-SVDK NAVYUG EXP');
			expect(results.trains[0].src_departure_time).toBe('20:30');
			expect(results.trains[0].dest_arrival_time).toBe('13:00');
		})
	);
});
