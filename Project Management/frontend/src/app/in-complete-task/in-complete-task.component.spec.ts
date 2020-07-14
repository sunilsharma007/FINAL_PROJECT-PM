import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InCompleteTaskComponent } from './in-complete-task.component';

describe('InCompleteTaskComponent', () => {
  let component: InCompleteTaskComponent;
  let fixture: ComponentFixture<InCompleteTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InCompleteTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InCompleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
