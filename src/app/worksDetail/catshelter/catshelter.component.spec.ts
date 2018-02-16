import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatshelterComponent } from './catshelter.component';

describe('CatshelterComponent', () => {
  let component: CatshelterComponent;
  let fixture: ComponentFixture<CatshelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatshelterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatshelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
