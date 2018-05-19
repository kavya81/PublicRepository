import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemanagercommentsComponent } from './createmanagercomments.component';

describe('CreatemanagercommentsComponent', () => {
  let component: CreatemanagercommentsComponent;
  let fixture: ComponentFixture<CreatemanagercommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemanagercommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemanagercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
