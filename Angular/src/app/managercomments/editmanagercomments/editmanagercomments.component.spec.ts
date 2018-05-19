import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmanagercommentsComponent } from './editmanagercomments.component';

describe('EditmanagercommentsComponent', () => {
  let component: EditmanagercommentsComponent;
  let fixture: ComponentFixture<EditmanagercommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmanagercommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmanagercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
