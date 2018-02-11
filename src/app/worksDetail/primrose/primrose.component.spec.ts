import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimroseComponent } from './primrose.component';

describe('PrimroseComponent', () => {
  let component: PrimroseComponent;
  let fixture: ComponentFixture<PrimroseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimroseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimroseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
