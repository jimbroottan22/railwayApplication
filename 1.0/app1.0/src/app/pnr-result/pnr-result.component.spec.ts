import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrResultComponent } from './pnr-result.component';

describe('PnrResultComponent', () => {
  let component: PnrResultComponent;
  let fixture: ComponentFixture<PnrResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnrResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
