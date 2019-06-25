/* tslint:disable:no-unused-variable */
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DummyService } from '../dummy.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component: HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let dummyService: DummyService;
	let el: DebugElement;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ HomeComponent ],
				providers: [ DummyService ]
			});
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);

		component = fixture.componentInstance;

		dummyService = TestBed.get(DummyService);

		el = fixture.debugElement.query(By.css('a'));
	});

	it('login  hidden when the user is authenticated', () => {
		expect(el.nativeElement.textContent.trim()).toBe('');

		fixture.detectChanges();
		expect(el.nativeElement.textContent.trim()).toBe('Needs Login');

		spyOn(dummyService, 'isAuthenticated').and.returnValue(true);

		expect(el.nativeElement.textContent.trim()).toBe('Needs Login');

		fixture.detectChanges();

		expect(el.nativeElement.textContent.trim()).toBe('Sucessfully loggedin');
	});
});
