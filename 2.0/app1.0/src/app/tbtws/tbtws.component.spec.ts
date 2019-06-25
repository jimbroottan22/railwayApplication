import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbtwsComponent } from './tbtws.component';

describe('TbtwsComponent', () => {
  let component: TbtwsComponent;
  let fixture: ComponentFixture<TbtwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbtwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbtwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
