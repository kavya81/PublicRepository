import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmanagercommentsComponent } from './showmanagercomments.component';

describe('ShowmanagercommentsComponent', () => {
  let component: ShowmanagercommentsComponent;
  let fixture: ComponentFixture<ShowmanagercommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmanagercommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmanagercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
