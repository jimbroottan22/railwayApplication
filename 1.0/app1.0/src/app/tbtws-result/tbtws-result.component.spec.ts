import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbtwsResultComponent } from './tbtws-result.component';

describe('TbtwsResultComponent', () => {
  let component: TbtwsResultComponent;
  let fixture: ComponentFixture<TbtwsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbtwsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbtwsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
