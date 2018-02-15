import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DustaticComponent } from './dustatic.component';

describe('DustaticComponent', () => {
  let component: DustaticComponent;
  let fixture: ComponentFixture<DustaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DustaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
