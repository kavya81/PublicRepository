import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowemployeeComponent } from './showemployee.component';

describe('ShowemployeeComponent', () => {
  let component: ShowemployeeComponent;
  let fixture: ComponentFixture<ShowemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
