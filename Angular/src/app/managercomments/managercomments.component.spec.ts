import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagercommentsComponent } from './managercomments.component';

describe('ManagercommentsComponent', () => {
  let component: ManagercommentsComponent;
  let fixture: ComponentFixture<ManagercommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagercommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
