import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerInboxComponent } from './manufacturer-inbox.component';

describe('ManufacturerInboxComponent', () => {
  let component: ManufacturerInboxComponent;
  let fixture: ComponentFixture<ManufacturerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
