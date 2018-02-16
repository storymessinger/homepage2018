import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoradoraComponent } from './doradora.component';

describe('DoradoraComponent', () => {
  let component: DoradoraComponent;
  let fixture: ComponentFixture<DoradoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoradoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
