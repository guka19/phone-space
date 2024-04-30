import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesComponent } from './smartphones.component';

describe('SmartphonesComponent', () => {
  let component: SmartphonesComponent;
  let fixture: ComponentFixture<SmartphonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphonesComponent]
    });
    fixture = TestBed.createComponent(SmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
