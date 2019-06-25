/* tslint:disable:no-unused-variable */
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TbtwsComponent } from './tbtws/tbtws.component';
import { PnrComponent } from './pnr/pnr.component';
import { TbtwsResultComponent } from './tbtws-result/tbtws-result.component';
import { PnrResultComponent } from './pnr-result/pnr-result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
describe('Router: App', () => {
	let location: Location;
	let router: Router;
	let fixture;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ AppRoutingModule ],
			declarations: [
				TbtwsComponent,
				PnrComponent,
				TbtwsResultComponent,
				PnrResultComponent,

				RegisterComponent,

				LoginComponent,

				HomeComponent
			]
		});

		router = TestBed.get(Router);
		location = TestBed.get(Location);

		fixture = TestBed.createComponent(AppComponent);
		router.initialNavigation();
	});

	it(
		'fakeAsync works',
		fakeAsync(() => {
			let promise = new Promise((resolve) => {
				setTimeout(resolve, 10);
			});
			let done = false;
			promise.then(() => (done = true));
			tick(50);
			expect(done).toBeTruthy();
		})
	);

	it(
		'navigate to "home" takes you to /home',
		fakeAsync(() => {
			router.navigate([ '/home' ]);
			tick(50);
			expect(location.path()).toBe('/home');
		})
	);
	it(
		'navigate to "trains" takes you to /trains',
		fakeAsync(() => {
			router.navigate([ '/trains' ]);
			tick(50);
			expect(location.path()).toBe('/trains');
		})
	);
	it(
		'navigate to "pnr" takes you to /pnr',
		fakeAsync(() => {
			router.navigate([ '/pnr' ]);
			tick(50);
			expect(location.path()).toBe('/pnr');
		})
	);
	it(
		'navigate to "login" takes you to /login',
		fakeAsync(() => {
			router.navigate([ '/login' ]);
			tick(50);
			expect(location.path()).toBe('/login');
		})
	);
});
