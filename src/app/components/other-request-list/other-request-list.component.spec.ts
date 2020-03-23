import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRequestListComponent } from './other-request-list.component';

describe('OtherRequestListComponent', () => {
  let component: OtherRequestListComponent;
  let fixture: ComponentFixture<OtherRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
