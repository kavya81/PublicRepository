import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemanagercommentsComponent } from './deletemanagercomments.component';

describe('DeletemanagercommentsComponent', () => {
  let component: DeletemanagercommentsComponent;
  let fixture: ComponentFixture<DeletemanagercommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemanagercommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemanagercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
