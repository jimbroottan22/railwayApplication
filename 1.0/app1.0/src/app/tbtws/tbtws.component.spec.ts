/* tslint:disable:no-unused-variable */
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TbtwsComponent } from './tbtws.component';
import { DummyService } from '../dummy.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('Component: tbtwscomponent', () => {
	let component: TbtwsComponent;
	let fixture: ComponentFixture<TbtwsComponent>;
	let dummyService: DummyService;
	let el: DebugElement;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ TbtwsComponent ],
				providers: [ DummyService, Router ]
			});
			localStorage.setItem('sid', '');
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(TbtwsComponent);

		component = fixture.componentInstance;

		dummyService = TestBed.get(DummyService);

		el = fixture.debugElement.query(By.css('a'));
	});

	it('login button hidden when the user is authenticated', () => {
		// To being with Angular has not done any change detection so the content is blank.
		//expect(el.nativeElement.textContent.trim()).toBe('');

		// Trigger change detection and this lets the template update to the initial value which is Login since by
		// default we are not authenticated
		fixture.detectChanges();
		expect(el.nativeElement.textContent.trim()).toBe('Needs Login');

		// Change the authetication state to true
		spyOn(dummyService, 'isAuthenticated').and.returnValue(true);

		// The label is still Login! We need changeDetection to run and for angular to update the template.
		expect(el.nativeElement.textContent.trim()).toBe('Needs Login');
		// Which we can trigger via fixture.detectChange()
		fixture.detectChanges();

		// Now the label is Logout
		//	expect(el.nativeElement.textContent.trim()).toBe('Sucessfully loggedin');
	});
});
