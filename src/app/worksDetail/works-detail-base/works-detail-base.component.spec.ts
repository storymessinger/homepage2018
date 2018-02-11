import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDetailBaseComponent } from './works-detail-base.component';

describe('WorksDetailBaseComponent', () => {
  let component: WorksDetailBaseComponent;
  let fixture: ComponentFixture<WorksDetailBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksDetailBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksDetailBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
