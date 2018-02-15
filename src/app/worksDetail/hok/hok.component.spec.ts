import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HokComponent } from './hok.component';

describe('HokComponent', () => {
  let component: HokComponent;
  let fixture: ComponentFixture<HokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
