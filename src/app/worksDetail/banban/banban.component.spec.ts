import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanbanComponent } from './banban.component';

describe('BanbanComponent', () => {
  let component: BanbanComponent;
  let fixture: ComponentFixture<BanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
