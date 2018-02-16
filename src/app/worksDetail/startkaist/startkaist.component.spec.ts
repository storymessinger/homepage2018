import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartkaistComponent } from './startkaist.component';

describe('StartkaistComponent', () => {
  let component: StartkaistComponent;
  let fixture: ComponentFixture<StartkaistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartkaistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartkaistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
